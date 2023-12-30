# readme

another sandbox; everything should just work.

## Notes

This full-stack web application contains a frontend + backend framework.

To contribute it's recommended to be comfortable working with the following web tech:

- [ ] [Jamstack](https://jamstack.org/)
- [ ] [Netlify](https://app.netlify.com/)
- [ ] [GraphQL]()
- [ ] [Prisma]()
- [ ] [Jest]()
- [ ] [Storybook](https://storybook.js.org/)
- [ ] [vite]()
- [ ] [Babel]()
- [ ] [Typescript]()
- [ ] [TailwindCSS](https://tailwindcss.com/)

## Standards

- [ ] [Designing w Figma?!](https://www.figma.com/)
- [ ] [CSS Reset, Still](https://meyerweb.com/eric/tools/css/reset/)
- [ ] [Good File Structure](https://redwoodjs.com/docs/tutorial/chapter1/file-structure)
- [ ] [Manage Node w NVM]()
- [ ] [TypeScript Strict Mode](https://redwoodjs.com/docs/typescript/strict-mode)
- [ ] [Profressive Web App w React](https://create-react-app.dev/docs/making-a-progressive-web-app/)
- [ ] [Netlify Deployment & CI]()
- [ ] [Simple Web Page Routing](https://redwoodjs.com/docs/tutorial/chapter1/first-page)
- [ ] [Prerendering]()
- [ ] [Authentication]()
- [ ] [Authorization]()
- [ ] [Apollo Cache]()
- [ ] [Accessibility]()
- [ ] [API]()
- [ ] [Prisma]()
- [ ] [GraphQL]()
- [ ] [Security is Important]()
- [ ] [Generators Save Time]()
- [ ] [Test w Jest]()
- [ ] [UI Catalog w StoryBook]()
- [ ] [Utility First CSS](https://tailwindcss.com/docs/utility-first)
  - [ ] [Custom Project Color Theme](https://tailwindcss.com/docs/utility-first)
- [ ] [Cells](https://redwoodjs.com/docs/tutorial/chapter0/what-is-redwood#cells)
- [ ] [Headless Table Library](https://tanstack.com/table/v8/docs/guide/introduction)

## Contribution

```bash
node: "=18.x"
yarn: ">=1.15"
```

```bash
yarn redwood dev` # Run devtools and open [local site](http://localhost:8910/)
yarn rw upgrade` # Upgrade core framework

yarn workspace web add marked # add package to frontend
yarn workspace api add better-fs # add package to backend

yarn rw g page page-title page-slug # Generate a new page, last param is optional
yarn rw g component icon # Generate an Icon component for svg use

yarn rw setup ui tailwindcss # Initial setup only, here for reference
```

### Recommended VSCode Stuff

- Ra Dark Shadow Theme
- 'Jetbrains Mono ExtraLight' Font

- ESLint
- GitLens
- React PropTypes Intellisense
- Babel Javascript
- Import Cost
- Version Lens
- EditorConfig for VS Code
- Prisma
- GraphQL: Language Feature Support

## Design Stuff

Custom Fonts:

- [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue)
- [Kalam](https://fonts.google.com/specimen/Kalam?query=kalam)
- [Inter](https://fonts.google.com/specimen/Inter?query=Inter)
- [Agbalumo](https://fonts.google.com/specimen/Agbalumo?query=Agbalumo)


## Coming Soon

The framework and this app uses are still in active development. The open source core framework community is working on some cutting edge features that should be available soon:

- React Server Components and a new transparent, non-GraphQL API
- SSR/Streaming
- Realtime and GraphQL Subscriptions
- Redwood Studio for getting runtime insights into your project
- Mailer

More information can be found [here](https://redwoodjs.com/roadmap).
