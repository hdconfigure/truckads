/*
Copyright (C) 2026 by Theron Kauk and John Morris Beck <hdconfigure.direct@gmail.com> 
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE 
INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE 
FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS 
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING 
OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
import path from 'path';
import os from 'os';
import { pathToFileURL } from 'url';











(async () => {
  const configPath = path.join(
    os.homedir(),
    '.config',
    'hdconfigure',
    'tools',
    'git',
    'hdconfigure',
    'hdconfigure_static_apps',
    'hdconfigure_static_apps.ts'
  );

  const configUrl = pathToFileURL(configPath).href;
  const hdui = await import(configUrl);

  const result = hdui.generate_html_page(
    "./style.css",
      "TruckAds",
    "./menu/",
    "./assets/menu.png",
    "by HD Configure",
    hdui.image("./assets/truckday.png") +
      hdui.text(
        "Put your ad on a moving truck across america, or register your truck for adspace and get paid. Why would you pay for an ad in just one place that doesnt move? Why would you drive truck and waste extra money you could be making?"
      ) +
      hdui.button("./register/", "Place Ad") +
      hdui.button("./register/", "Register Truck") +
      hdui.image("./assets/truckback.jpg") +
      hdui.image("./assets/trucknight.png") +
      hdui.text(
        "If you want to advertise almost anything your ads can reach across the nation by putting them on longhaul trucks. For trucking companies and owner operators you are wasting precious ad revinue that you could be making with us. Register today and sign up to be served an advertising partner. For trucking companies and owners operators it is free to sign up."
      )
  );














  console.log(result);
})().catch(console.error);
