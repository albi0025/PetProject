import {expect} from 'chai';
let scrape = require('../../helpers/scrape');

xdescribe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.eql(true);
  });
});

describe('Scrape', () => {
  describe('scrapePetango', () => {
    it('works', () => {
      expect(scrape.scrapePetango("")).to.eql([]);
    });
  });
  let html = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>

      <title>Adoptable Animals</title>
      <link id="stylesheet" rel="stylesheet" href= type="text/css" />
      <style type="text/css">
          .hidden { display: none; }
      </style>
      <script language=javascript type="text/javascript">
          var newwindow;
          function poptastic(url)
          {
  	        newwindow=window.open(url,'Animal_Details','height=700,width=700,scrollbars=1,resizable=1');
  	        if (window.focus) {newwindow.focus()}
          }
      </script>
  </head>

  <body class="list-body">
          <!-- Google Tag Manager -->
      <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-55MWRN"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <script>(function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
          'gtm.start':

          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],

      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =

      '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);

  })(window, document, 'script', 'dataLayer', 'GTM-55MWRN');</script>
      <!-- End Google Tag Manager -->

  <div class="list-body">
      <table id="tblSearchResults" class="list-table" cellspacing="2" border="0" style="width:100%">
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=33150855&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/4c8cd17e-b45e-4869-a08b-e60c053b2ce8_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=33150855&css=" >Lucas</a></div>
  <div class="list-animal-id">33150855</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Male/Neutered</div>
  <div class="list-animal-breed">German Shepherd/Mix</div>
  <div class="list-animal-age">9 years 7 months</div>
  <div class="hidden">Dog Second Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=33927386&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/16b208ca-e425-4994-9b8e-d9aab96d0ddf_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=33927386&css=" >Loretta(Ariel)</a></div>
  <div class="list-animal-id">33927386</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Female</div>
  <div class="list-animal-breed">Great Pyrenees/Mix</div>
  <div class="list-animal-age">2 years 4 months</div>
  <div class="hidden">Dog Holding</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34250710&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/2fe1709a-ebc6-4f22-93cb-de89b9e3189c_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34250710&css=" >Cony</a></div>
  <div class="list-animal-id">34250710</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Male/Neutered</div>
  <div class="list-animal-breed">Terrier, Pit Bull/Mix</div>
  <div class="list-animal-age">4 years 2 months</div>
  <div class="hidden">Dog Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34584335&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/11d1877d-8611-4f53-90db-0621d709b317_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34584335&css=" >Baltazaar</a></div>
  <div class="list-animal-id">34584335</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Male/Neutered</div>
  <div class="list-animal-breed">Akita/Mix</div>
  <div class="list-animal-age">1 year 1 month</div>
  <div class="hidden">Dog Second Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34622074&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/02080eeb-7ffc-43b5-bb91-9a9c558ca0af_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34622074&css=" >Roscoe</a></div>
  <div class="list-animal-id">34622074</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Male/Neutered</div>
  <div class="list-animal-breed">Hound/Mix</div>
  <div class="list-animal-age">1 year 1 month</div>
  <div class="hidden">Dog Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34733129&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/fa6d7884-cfbb-457e-945f-818eb736d768_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34733129&css=" >Pumba</a></div>
  <div class="list-animal-id">34733129</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Male/Neutered</div>
  <div class="list-animal-breed">German Shepherd/Mix</div>
  <div class="list-animal-age">3 years</div>
  <div class="hidden">Dog Second Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34788723&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/d6dfcd96-6976-4214-85d3-d61a6cdd36c7_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34788723&css=" >Bella Mae</a></div>
  <div class="list-animal-id">34788723</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Female/Spayed</div>
  <div class="list-animal-breed">Terrier, American Pit Bull/Mix</div>
  <div class="list-animal-age">1 year 6 months</div>
  <div class="hidden">Dog Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34790773&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/579a8a51-6ebe-40ae-a4b8-1d5eba26b15c_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34790773&css=" >Reno</a></div>
  <div class="list-animal-id">34790773</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Male/Neutered</div>
  <div class="list-animal-breed">Border Collie/Catahoula Leopard dog</div>
  <div class="list-animal-age"> 8 months</div>
  <div class="hidden">Dog Second Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34807661&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/870409f3-eb12-44da-b335-dbacf7827244_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34807661&css=" >Georgia</a></div>
  <div class="list-animal-id">34807661</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Female/Spayed</div>
  <div class="list-animal-breed">Poodle, Miniature/Mix</div>
  <div class="list-animal-age">10 years</div>
  <div class="hidden">Dog Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34843733&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/7e284739-77eb-4af6-b6c1-b554bf1ebbeb_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34843733&css=" >Sheeba</a></div>
  <div class="list-animal-id">34843733</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Female/Spayed</div>
  <div class="list-animal-breed">Shepherd/Mix</div>
  <div class="list-animal-age">2 years</div>
  <div class="hidden">Dog Adopt</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34843745&css=" ><img class="list-animal-photo" src="//media.petango.com/sms/photos/1095/6cfdcf92-9921-4a20-a63f-048fa049efe5_TN1.jpg" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34843745&css=" >Chief</a></div>
  <div class="list-animal-id">34843745</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Male/Neutered</div>
  <div class="list-animal-breed">Coonhound, Redbone/Mix</div>
  <div class="list-animal-age">1 year 6 months</div>
  <div class="hidden">Dog Holding</div>
  </div>
  </td>
  </tr>
  <tr>
  <td class="list-item">
  <div class="list-animal-photo-block">
  <a href="wsAdoptableAnimalDetails.aspx?id=34843747&css=" ><img class="list-animal-photo" src="//media.petango.com/webservices/adoptablesearch/images/Photo-Not-Available-dog.gif" alt="Photo"></a>
  </div>
  <div class="list-animal-info-block">
  <div class="list-animal-name"><a href="wsAdoptableAnimalDetails.aspx?id=34843747&css=" >Snowy</a></div>
  <div class="list-animal-id">34843747</div>
  <div class="list-anima-species">Dog</div>
  <div class="list-animal-sexSN">Female/Spayed</div>
  <div class="list-animal-breed">Hound/Mix</div>
  <div class="list-animal-age">1 year</div>
  <div class="hidden">Dog Adopt</div>
  </div>
  </td>
  </tr>
  </table>

  <!--


  -->
  <br /><br />
  <div id="petango_ad" style="text-align:center"><a href="http://www.petango.com" target="_blank"><img src="../adoptablesearch/images/Powered-by-PP.GIF" alt="Powered by Petango" border="0" /></a></div>
  <!-- Begin comScore Tag -->
  <script>
      document.write(unescape("%3Cscript src='" + (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js' %3E%3C/script%3E"));
  </script>

  <script>
    COMSCORE.beacon({
      c1:2,
      c2:6745171,
      c3:"",
      c4:"",
      c5:"",
      c6:"",
      c15:""
    });
  </script>
  <noscript>
    <img src="http://b.scorecardresearch.com/p?c1=2&c2=6745171&c3=&c4=&c5=&c6=&c15=&cj=1" />
  </noscript>
  <!-- End comScore Tag -->

  </div>
  </body>
      </html>
  `;
  describe('parseAnimalListResponse', () => {
    it('works', () => {
      expect(scrape.parseAnimalListResponse(html)).to.eql(["http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=33150855&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=33927386&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34250710&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34584335&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34622074&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34733129&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34788723&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34790773&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34807661&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34843733&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34843745&css=",
      "http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=34843747&css="]);
    });
  });
});
