############################################
# Script to make a formatted pull request. #
############################################

# Parses URL for PR and opens in browser
open_pr_in_browser() {
  github_url=`git remote -v | awk '/fetch/{print $2}' | sed -Ee 's#(git@|git://)#https://#' -e 's@com:@com/@' -e 's%\.git$%%' | awk '/github/'`;
  branch_name=`git symbolic-ref HEAD | cut -d"/" -f 3,4`;
  ## TODO: pass the target branch here, otherwise default to master
  pr_url=$github_url"/compare/master..."$branch_name
  open $pr_url;
}

ypr() {
  ## Push all changes to current branch
  git push origin HEAD

  if [ $? -eq 0 ]; then
    open_pr_in_browser
  else
    echo 'YPR failed to push commits and open a pull request.';
  fi
}

