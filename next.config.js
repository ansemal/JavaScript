/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // compiler: {
  //   // ssr and displayName are configured by default
  //   styledComponents: true,
  // },
}

module.exports = nextConfig
// {
//   compiler: {
//     // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
//     styledComponents: true | {
//       // Enabled by default in development, disabled in production to reduce file size,
//       // setting this will override the default for all environments.
//       displayName: true,
//       // Enabled by default.
//       ssr: true,
//       // Enabled by default.
//       fileName: true,
//       // Empty by default.
//       topLevelImportPaths: string[''],
//       // Defaults to ["index"].
//       meaninglessFileNames: string["index"],
//       // Enabled by default.
//       cssProp: true,
//       // Empty by default.
//       namespace: '',
//       // // Not supported yet.
//       // minify?: boolean,
//       // // Not supported yet.
//       // transpileTemplateLiterals?: boolean,
//       // // Not supported yet.
//       // pure?: boolean,
//     },
//   },
// }

//nextConfig
