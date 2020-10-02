const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-careers-jsx": hot(preferDefault(require("/Users/aniewiadomski/projects/uclasep.github.io/src/pages/careers.jsx"))),
  "component---src-pages-exec-jsx": hot(preferDefault(require("/Users/aniewiadomski/projects/uclasep.github.io/src/pages/exec.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/aniewiadomski/projects/uclasep.github.io/src/pages/index.jsx"))),
  "component---src-pages-members-jsx": hot(preferDefault(require("/Users/aniewiadomski/projects/uclasep.github.io/src/pages/members.jsx"))),
  "component---src-pages-recruitment-jsx": hot(preferDefault(require("/Users/aniewiadomski/projects/uclasep.github.io/src/pages/recruitment.jsx"))),
  "component---src-pages-ventures-jsx": hot(preferDefault(require("/Users/aniewiadomski/projects/uclasep.github.io/src/pages/ventures.jsx")))
}

