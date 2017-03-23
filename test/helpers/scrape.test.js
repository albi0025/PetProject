import {expect} from 'chai';
import fs from 'fs';
let scrape = require('../../helpers/scrape');

describe('Scrape', () => {
  //We need to figure out how to run callbacks and mock the data so that we can
  //run this test.
  xdescribe('scrapePetango', () => {
    it('works', () => {
      expect(scrape.scrapePetango("http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimals.aspx?species=Dog&sex=All&agegroup=All&colnum=1&authkey=1t4v495156y98t2wd78317102f933h83or1340ptjm31spd04d")).to.eql([]);
    });
  });
  let html = fs.readFileSync("./test/helpers/html/scrapetest.html").toString();

  describe('parseAnimalListResponse', () => {
    it('works', () => {
      expect(scrape.parseAnimalListResponse(html)).to.eql(
      ["http://ws.petango.com/Webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=33150855&css=",
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
  let individualPetHtml = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>
	Animal Details
</title>
    <link id="stylesheet" rel="stylesheet" href="" type="text/css" />
    <style type='text/css'>
        .logo
        {
            width: 185px !important;
            height: 57px !important;
        }
        .centeredImage
        {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    </style>

    <script type="text/javascript">
        function loadPhoto(url) {
            document.imgAnimalPhoto.src = url;
        }
        function loadVideo(videoid) {
            window.open('wsYouTubeVideo.aspx?videoid=' + videoid, 'Video', 'status=no,menubar=no,scrollbars=no,resizable=no,width=500,height=380');
        }
    </script>

	<meta property="og:title" content="Meet Lucas" />
	<meta property="og:image" content="http://media.petango.com/sms/photos/1095/4c8cd17e-b45e-4869-a08b-e60c053b2ce8.jpg" />
	<meta property="og:description" content="I'm Lucas!  I love people; especially ones that take the time to get to know me.  A perfect day for me would be going on a walk or playing fetch for some exercise, getting spoiled with a couple of treats, and then curling up on the couch to watch a movie.  I am crate trained and really well behaved.  I used to live with my brother, now that he found another home, I would probably do better as an only pet in the household.  I am really looking for a house with soft beds, people who like snuggles and taking me on walks, and yummy treats.  If this sounds like you and you are looking for a sweet new boy to join your family, please come down to HOV and meet me.  I would love to be your new best friend!" />
	<meta property="og:url" content="http://wspetangoprd.azurewebsites.net/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=33150855&css=" />
</head>
<body class="detail-body">
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

    <!-- default layout start-->
    <div id="DefaultLayoutDiv">
        <table cellpadding="0" cellspacing="0" width="100%" class="top-bar">
            <tr>
                <td>
                    <div id="petango_ad">
                        <a href="http://petango.com" id="petango_ad_link" target="_blank">
                            <img src="../adoptablesearch/images/Powered-by-PP.GIF" alt="Powered by Petango" border="0" />
                        </a>
                    </div>
                </td>
                <td class="detail-link" style="text-align: right; vertical-align: top;">
                    <!-- Go to www.addthis.com/dashboard to customize your tools -->
                    <div class="addthis_inline_share_toolbox"></div>
                    <a href="javascript:window.print()" class="print_btn_container"><span class="print_btn" /></a>
                    &nbsp;&nbsp;&nbsp;
                    <a href="javascript:history.go(-1); " id="BackAnchor">
                        <img id="imgReturnToListing" src="images/returntolisting.gif" align="top" /></a>

                </td>
            </tr>
        </table>
        <table border="0">
            <tr>
                <td class="detail-animal-name" colspan="2">
                    Meet <span id="lbName">Lucas</span>
                </td>
            </tr>
            <tr>
                <td valign="top" style="width: 1%">
                    <img id="imgAnimalPhoto" class="detail-animal-photo" name="imgAnimalPhoto" src="//media.petango.com/sms/photos/1095/4c8cd17e-b45e-4869-a08b-e60c053b2ce8.jpg" />
                    <div id="plPhotos" class="detail-photo-links">

                        Click a number to change picture or play to see a video:<br />
                        [<a id="lnkPhoto1" onclick="loadPhoto(&#39;//media.petango.com/sms/photos/1095/4c8cd17e-b45e-4869-a08b-e60c053b2ce8.jpg&#39;); return false;" href="//media.petango.com/sms/photos/1095/4c8cd17e-b45e-4869-a08b-e60c053b2ce8.jpg">1</a>] [<a id="lnkPhoto2" onclick="loadPhoto(&#39;//media.petango.com/sms/photos/1095/ff28963d-9568-47f6-bd56-bdf5ad4c3007.jpg&#39;); return false;" href="//media.petango.com/sms/photos/1095/ff28963d-9568-47f6-bd56-bdf5ad4c3007.jpg">2</a>] [<a id="lnkPhoto3" onclick="loadPhoto(&#39;//media.petango.com/sms/photos/1095/c2bca92c-f8ef-47b5-82a8-495877bfdee7.jpg&#39;); return false;" href="//media.petango.com/sms/photos/1095/c2bca92c-f8ef-47b5-82a8-495877bfdee7.jpg">3</a>]
                        <span id="spanVideo">[<a id="lnkVideo">Play</a>]
                        </span>

</div>
                </td>
                <td valign="top" style="width: 100%">
                    <table class="detail-table" border="0" cellspacing="0">
                        <tr id="trAnimalID">
	<td class="detail-label" align="right">
                                <b>Animal ID</b>
                            </td>
	<td class="detail-value">
                                <span id="lblID">33150855</span>&nbsp;
                            </td>
</tr>

                        <tr id="trSpecies">
	<td class="detail-label" align="right">
                                <b>Species</b>
                            </td>
	<td class="detail-value">
                                <span id="lblSpecies">Dog</span>&nbsp;
                            </td>
</tr>

                        <tr id="trBreed">
	<td class="detail-label" align="right">
                                <b>Breed</b>
                            </td>
	<td class="detail-value">
                                <span id="lbBreed">German Shepherd/Mix</span>&nbsp;
                            </td>
</tr>

                        <tr id="trAge">
	<td class="detail-label" align="right">
                                <b>Age</b>
                            </td>
	<td class="detail-value">
                                <span id="lbAge">9 years 7 months 10 days</span>&nbsp;
                            </td>
</tr>

                        <tr id="trSex">
	<td class="detail-label" align="right">
                                <b>Gender</b>
                            </td>
	<td class="detail-value">
                                <span id="lbSex">Male</span>&nbsp;
                            </td>
</tr>

                        <tr id="trSize">
	<td class="detail-label" align="right">
                                <b>Size</b>
                            </td>
	<td class="detail-value">
                                <span id="lblSize">Large</span>&nbsp;
                            </td>
</tr>

                        <tr id="trColor">
	<td class="detail-label" align="right">
                                <b>Color</b>
                            </td>
	<td class="detail-value">
                                <span id="lblColor">Black/Tan</span>&nbsp;
                            </td>
</tr>

                        <tr id="trAltered">
	<td class="detail-label" align="right">
                                <b>Spayed/Neutered</b>
                            </td>
	<td class="detail-value">
                                &nbsp;<img id="ImageAltered" src="images/GreenCheck.JPG" style="height:15px;width:15px;" />
                            </td>
</tr>

                        <tr id="trDeclawed">
	<td class="detail-label" align="right">
                                <b>Declawed</b>
                            </td>
	<td class="detail-value">
                                <span id="lbDeclawed">No</span>&nbsp;
                            </td>
</tr>









                        <tr id="trIntakeDate">
	<td class="detail-label" align="right">
                                <b>Intake Date</b>
                            </td>
	<td class="detail-value">
                                <span id="lblIntakeDate">1/25/2017</span>&nbsp;
                            </td>
</tr>




                    </table>
                </td>
            </tr>
        </table>
        <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td height="1">
                        <img name="Animal_r1_c1" src="images/Animal_r1_c1.gif" alt="" border="0" height="22"
                            width="20" />
                    </td>
                    <td height="1">
                        <img name="Animal_r1_c2" src="images/Animal_r1_c2.gif" alt="" border="0" height="22"
                            width="100%" />
                    </td>
                    <td height="1">
                        <img name="Animal_r1_c3" src="images/Animal_r1_c3.gif" alt="" border="0" height="22"
                            width="24" />
                    </td>
                </tr>
                <tr>
                    <td background="images/Animal_r2_c1.gif"></td>
                    <td bgcolor="#eceff6" valign="top" style="padding-top: 3px">
                        <!-- Description -->
                        <div id="tblDescription" class="detail-animal-desc">
                            <span id="lbDescription">I'm Lucas!  I love people; especially ones that take the time to get to know me.  A perfect day for me would be going on a walk or playing fetch for some exercise, getting spoiled with a couple of treats, and then curling up on the couch to watch a movie.  I am crate trained and really well behaved.  I used to live with my brother, now that he found another home, I would probably do better as an only pet in the household.  I am really looking for a house with soft beds, people who like snuggles and taking me on walks, and yummy treats.  If this sounds like you and you are looking for a sweet new boy to join your family, please come down to HOV and meet me.  I would love to be your new best friend!</span>
                        </div>
                        <!-- Logos -->
                        <div id="tbl24PWtrial">

                                <div style="margin-left: auto; margin-right: auto; float: left; display:inline-block;">
                                <a id="HyperLink2" href="http://www.24PetWatch.com" target="_blank"><img src="../adoptablesearch/images/24PW-Web-Services-Graphic-Trial.png" border="0" alt="" /></a>
                                </div>

</div>









                    </td>
                    <td background="images/Animal_r2_c3.gif"></td>
                </tr>
                <tr>
                    <td>
                        <img name="Animal_r3_c1" src="images/Animal_r3_c1.gif" alt="" border="0" height="23"
                            width="20" />
                    </td>
                    <td>
                        <img name="Animal_r3_c2" src="images/Animal_r3_c2.gif" alt="" border="0" height="23"
                            width="100%" />
                    </td>
                    <td>
                        <img name="Animal_r3_c3" src="images/Animal_r3_c3.gif" alt="" border="0" height="23"
                            width="24" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- default layout end-->
    <!-- alternate layout start-->

    <!-- alternate layout end-->
    <!-- Begin comScore Tag -->
    <script>
        document.write(unescape("%3Cscript src='" + (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js' %3E%3C/script%3E"));
    </script>
    <script>
        COMSCORE.beacon({
            c1: 2,
            c2: 6745171,
            c3: "",
            c4: "",
            c5: "",
            c6: "",
            c15: ""
        });
    </script>
    <noscript>
        <img src="http://b.scorecardresearch.com/p?c1=2&c2=6745171&c3=&c4=&c5=&c6=&c15=&cj=1" />
    </noscript>
    <!-- End comScore Tag -->

    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-588b5f256d215fd9"></script>
</body>
    </html>
  `;
  describe('parseIndividualAnimalResponse', () => {
    it('works', () => {
      expect(scrape.parseIndividualAnimalResponse(individualPetHtml)).to.eql(
        {
          animalId: 33150855,
          mainPhoto:"//media.petango.com/sms/photos/1095/4c8cd17e-b45e-4869-a08b-e60c053b2ce8.jpg",
          name: "Lucas",
          species: "Dog",
          breed: "German Shepherd/Mix",
          age: "9 years 7 months 10 days",
          gender: "Male",
          size: "Large",
          color: "Black/Tan",
          spayNeuter: true,
          declawed: "No",
          intakeDate: "1/25/2017",
          description: "I'm Lucas!  I love people; especially ones that take the time to get to know me.  A perfect day for me would be going on a walk or playing fetch for some exercise, getting spoiled with a couple of treats, and then curling up on the couch to watch a movie.  I am crate trained and really well behaved.  I used to live with my brother, now that he found another home, I would probably do better as an only pet in the household.  I am really looking for a house with soft beds, people who like snuggles and taking me on walks, and yummy treats.  If this sounds like you and you are looking for a sweet new boy to join your family, please come down to HOV and meet me.  I would love to be your new best friend!"
        }
      );
    });
  });
});
