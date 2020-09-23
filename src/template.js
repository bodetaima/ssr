export default function template(title, initialState = {}) {
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta name="description" content="This is a Test React App for SEO Improving" />
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
