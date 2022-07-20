CONFIG=${1:-./.eslintrc.js}

echo "Cleaning build";
npm run clean;

echo "Linting before build";
npx eslint --config $CONFIG src/inner/myInnerModule.ts;

echo "Building";
npx tsc --project tsconfig.json;

echo "Linting after build";
npx eslint --config $CONFIG src/inner/myInnerModule.ts