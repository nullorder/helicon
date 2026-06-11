# Helicon — the Runek showcase world. Run `just` (or `just --list`) to see all recipes.

# Every renderable component in the Runek registry; `core` comes along as a dependency.
components := "player terrain room house wall floor roof door window staircase table chair lamp rug shelf bookshelf lake shore rocks sky grass trees lightrig"

# List available recipes
default:
    @just --list

# Install dependencies
install:
    pnpm install

# Run the dev server
dev:
    pnpm dev

# Type-check then build for production
build:
    pnpm build

# Preview the production build
preview:
    pnpm preview

# Type-check only
typecheck:
    pnpm typecheck

# Full verification gate: typecheck + build
check: build

# Re-pull Runek component source into src/runek from a local runek checkout.
# Once @runek/cli is on npm and the registry is live, this becomes:
#   npx runek add --overwrite <components…>
vendor RUNEK="../runek":
    node {{RUNEK}}/packages/cli/src/index.ts add --overwrite --no-install \
        --registry {{RUNEK}}/registry {{components}}

# Remove build output and installed dependencies
clean:
    rm -rf node_modules dist .vite
