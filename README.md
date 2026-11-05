# ESRI Workstations Dashboard

An Angular 21 starter implementation of the ESRI Workstations dashboard.

## Included
- Standalone Angular application
- Responsive workstation dashboard
- Summary counts (total, in use, available, active sessions)
- Environment selector
- Sample data for six workstations
- Status indicators and ArcMap / ArcScene / ArcGlobe session counts

## Requirements
- Node.js version supported by Angular 21 (use the version approved by your organization)
- npm
- Access to your organization's internal npm registry if your environment requires it

## Run locally

After extracting the ZIP:

```bash
npm install
npm start
```

Open the local URL printed by Angular CLI (normally http://localhost:4200).

Build:

```bash
npm run build
```

## Important: internal Axis framework integration

This archive is an Angular application starter, **not an internally generated Axis project**. It does not contain proprietary Axis packages, Axis schematics, corporate branding assets, or internal authentication configuration.

Your company's Axis CLI / schematics must be installed and authenticated through the approved Artifactory process. Once you can generate a blank Axis project using the internal instructions, copy the `src/app` dashboard files and `src/styles.css` into that project, then reconcile the generated `angular.json` and package dependencies with the Axis-generated configuration.

Do not paste Artifactory passwords or access tokens into this project or commit them to source control.

## Replace sample data with your API

The six workstation records are currently defined in `src/app/app.component.ts` in the `workstations` signal. Replace this sample data with an Angular service and your backend API when the endpoint and response contract are available.
