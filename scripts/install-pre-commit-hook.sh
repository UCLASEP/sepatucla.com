#!/bin/bash
gitroot=$(git rev-parse --show-toplevel || echo ".")
cp $gitroot/scripts/pre-commit.sample $gitroot/.git/hooks/pre-commit
chmod u+x $gitroot/.git/hooks/pre-commit

success_message="\n\n✅ Pre-commit hook installed. Happy developing! 🎉 🛁 🎉 🛁 🎉\n"

echo -e $success_message
