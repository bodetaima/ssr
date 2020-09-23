export default function template(title, initialState = {}) {
  let scripts = ` <script>
                    window.__STATE__ = ${JSON.stringify(initialState)}
                  </script>
                  <script src="assets/client.js"></script>
                `;
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link rel="stylesheet" href="assets/style.css">
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                   </div>
                </div>

                  ${scripts}
              </body>
              `;

  return page;
}
