# McmdothubDashboardAngular14

- Source:
  https://www.youtube.com/watch?v=6b71XfxQiS0&list=PLASrVOHlq9W8LaDG4tfjntw5P_dCtkTWx&index=36

# Create account component

PS D:\GITHUB - Published\mcmdothub-dashboard-angular14> ng g c core/components/layouts/account
CREATE src/app/core/components/layouts/account/account.component.html (22 bytes)
CREATE src/app/core/components/layouts/account/account.component.spec.ts (606 bytes)
CREATE src/app/core/components/layouts/account/account.component.ts (280 bytes)
CREATE src/app/core/components/layouts/account/account.component.scss (0 bytes)
UPDATE src/app/app.module.ts (503 bytes)

# Create dashboard component

PS D:\GITHUB - Published\mcmdothub-dashboard-angular14> ng g c core/components/layouts/dashboard
CREATE src/app/core/components/layouts/dashboard/dashboard.component.html (24 bytes)
CREATE src/app/core/components/layouts/dashboard/dashboard.component.spec.ts (620 bytes)
CREATE src/app/core/components/layouts/dashboard/dashboard.component.ts (288 bytes)
CREATE src/app/core/components/layouts/dashboard/dashboard.component.scss (0 bytes)
UPDATE src/app/app.module.ts (621 bytes)

# Create login module

PS D:\GITHUB - Published\mcmdothub-dashboard-angular14> ng g m pages/account/login
CREATE src/app/pages/account/login/login.module.ts (191 bytes)

# Create login component

PS D:\GITHUB - Published\mcmdothub-dashboard-angular14> ng g c pages/account/login
CREATE src/app/pages/account/login/login.component.html (20 bytes)
CREATE src/app/pages/account/login/login.component.spec.ts (592 bytes)
CREATE src/app/pages/account/login/login.component.ts (272 bytes)
CREATE src/app/pages/account/login/login.component.scss (0 bytes)
UPDATE src/app/pages/account/login/login.module.ts (265 bytes)

AM RAMAS LA PARTE 6
https://www.youtube.com/watch?v=ARNgZREs65I&list=PLASrVOHlq9W8LaDG4tfjntw5P_dCtkTWx&index=31S

# Create summary module

PS D:\GITHUB - Published\mcmdothub-dashboard-angular14> ng g m pages/dashboard/summary
CREATE src/app/pages/dashboard/summary/summary.module.ts (193 bytes)

# Create dsummary component

PS D:\GITHUB - Published\mcmdothub-dashboard-angular14> ng g c pages/dashboard/summary
CREATE src/app/pages/dashboard/summary/summary.component.html (22 bytes)
CREATE src/app/pages/dashboard/summary/summary.component.spec.ts (606 bytes)
CREATE src/app/pages/dashboard/summary/summary.component.ts (280 bytes)
CREATE src/app/pages/dashboard/summary/summary.component.scss (0 bytes)
UPDATE src/app/pages/dashboard/summary/summary.module.ts (273 bytes)

# Create core module

PS D:\GITHUB - Published\mcmdothub-dashboard-angular14> ng g m core
CREATE src/app/core/core.module.ts (190 bytes)

# Install Angular Material

ng add @angular/material

# Create a custom library and publish to NPM repository (we choose the name of the library: "custom-library")

PS D:\GITHUB - Published\mcmdothub-dashboard-angular14> ng g library custom-library
CREATE projects/custom-library/karma.conf.js (1435 bytes)
CREATE projects/custom-library/ng-package.json (163 bytes)
CREATE projects/custom-library/package.json (193 bytes)
CREATE projects/custom-library/README.md (1042 bytes)
CREATE projects/custom-library/tsconfig.lib.json (333 bytes)
CREATE projects/custom-library/tsconfig.lib.prod.json (240 bytes)
CREATE projects/custom-library/tsconfig.spec.json (309 bytes)
CREATE projects/custom-library/src/test.ts (767 bytes)
CREATE projects/custom-library/src/public-api.ts (187 bytes)
CREATE projects/custom-library/src/lib/custom-library.module.ts (278 bytes)
CREATE projects/custom-library/src/lib/custom-library.component.spec.ts (649 bytes)
CREATE projects/custom-library/src/lib/custom-library.component.ts (288 bytes)
CREATE projects/custom-library/src/lib/custom-library.service.spec.ts (393 bytes)
CREATE projects/custom-library/src/lib/custom-library.service.ts (142 bytes)
UPDATE angular.json (4371 bytes)
UPDATE package.json (1156 bytes)
UPDATE tsconfig.json (949 bytes)

# Automatically "angular.json" was modified and added "custom-library"

# Add inside "package.json"

"start:custom": "ng serve --project custom.library",
"build:custom": "ng build --project custom.library",
"watch:custom": "ng build:custom --watch",

# Test the new commands:

- This will build a new folder: "dist"
  PS D:\GITHUB - Published\mcmdothub-dashboard-angular14> npm run build:custom

# Create Shared module

PS D:\GITHUB - Published\mcmdothub-dashboard-angular14> ng g m shared
CREATE src/app/shared/shared.module.ts (192 bytes)

# Create customer component

PS D:\GITHUB - Published\mcmdothub-dashboard-angular14> ng g c pages/dashboard/customer
CREATE src/app/pages/dashboard/customer/customer.component.html (23 bytes)
CREATE src/app/pages/dashboard/customer/customer.component.spec.ts (613 bytes)
CREATE src/app/pages/dashboard/customer/customer.component.ts (284 bytes)
CREATE src/app/pages/dashboard/customer/customer.component.scss (0 bytes)
UPDATE src/app/app.module.ts (565 bytes)

# Create customer module

PS D:\GITHUB - Published\mcmdothub-dashboard-angular14> ng g m pages/dashboard/customer
CREATE src/app/pages/dashboard/customer/customer.module.ts (194 bytes)
