CONFIG=${1:-./.eslintrc.js}
FILE_TO_LINT=${2:-sibling/mySiblingModule.ts}

echo "Cleaning build";
npm run clean;

echo "Linting before build";
npx eslint --config $CONFIG $FILE_TO_LINT;

echo "Building";
npx tsc --project tsconfig.json;

echo "Linting after build";
npx eslint --config $CONFIG $FILE_TO_LINT;