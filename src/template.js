export default function template(title, initialState = {}) {
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <script>
                  window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <title> ${title} </title>
                <link rel="stylesheet" href="assets/style.css">
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                   </div>
                </div>

                <script src="assets/client.js"></script>
              </body>
              `;

  return page;
}
