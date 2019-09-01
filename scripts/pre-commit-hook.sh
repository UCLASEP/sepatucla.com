set -e

echo "👉 👉 👉 Running JS file checks..."
# Run prettier on javascript files.
JAVASCRIPT_DIFFED_FILES=`git diff HEAD --cached --name-only --diff-filter=ACMR -- '*.jsx' '*.js' '*.json'`
if [ -n "$JAVASCRIPT_DIFFED_FILES" ]; then
  echo "$JAVASCRIPT_DIFFED_FILES"
  echo "Checking for un-pretty files..."
  set +e
  PRETTIER_FILES=$(echo "$JAVASCRIPT_DIFFED_FILES" | xargs yarn run --silent prettier --list-different 2>/dev/null)
  set -e
  if [ -n "$PRETTIER_FILES" ]; then
    echo "🤮💩🤮💩 Detected non-pretty JS files 🤮💩🤮💩".
    echo "Fixing.... ".
    echo "Running yarn run prettier --write $PRETTIER_FILES"
    yarn run prettier --write $PRETTIER_FILES
    git add $PRETTIER_FILES
  fi
   echo "✔️ Restaged pretty-fied files! 💅💄"
else
  echo "✔️ No staged changes to JS files detected.\n"
fi

# Don't ever directly commit to master or to gh-pages branch!
echo "👉 👉 👉 Validating branch policies..."
protected_branches=("master" "gh-pages" "test-branch")

git_policy_ghpages="\n\n❌❌❌❌❌❌❌❌❌❌\nNEVER commit directly to the gh-pages branch!\n❌❌❌❌❌❌❌❌❌❌\n\n"
git_policy_master="\n\n❌❌❌❌❌❌❌❌❌❌\nNEVER commit or push directly to master branch! Make a PR instead.\n❌❌❌❌❌❌❌❌❌❌\n\n"

current_branch=$(git symbolic-ref --quiet HEAD | sed -e 's,.*/\(.*\),\1,')
push_command=$(ps -ocommand= -p $PPID)

exit_and_echo_git_policy() {
  if [$1 = "master"]
  then
    echo -e $git_policy_master
  else
    echo -e $git_policy_ghpages
  fi
  exit 1
}

contains() {
    local n=$#
    local value=${!n}
    for ((i=1;i < $#;i++)) {
        if [ "${!i}" == "${value}" ]; then
            echo "y"
            return 0
        fi
    }
    echo "n"
    return 1
}

if [[ $push_command =~ "master" ]] || [ $(contains "${protected_branches[@]}" $current_branch) == "y" ]; then
  exit_and_echo_git_policy $current_branch
fi

echo "✔️ No branch policy violations detected.\n"

unset exit_and_echo_git_policy

echo "\n 🛁 🛁 🛁 Pre-commit hooks completed! 🛁 🛁 🛁\n"

exit 0
