javascript: (function() {
    const IP_DIRECTION = "http://151.80.19.156:8777";
    getLink($('#extra_data > script:nth-child(6)').text());

    function getLink(rawCode) {
      const cleanSlashed = rawCode.replace(/\\/g, "");
      const cleanBackSlash = cleanSlashed.replace(/\//g, "");
      const cleanStrings = cleanBackSlash.replace(/"/g, "");
      const firtSection = "eval(function(p,a,c,k,e,d){while(c--)if(k[c])p=p.replace(new RegExp('b'+c.toString(a)+'b','g'),k[c]);return p}('2(1v).1u({1t:[{1s:o:j.g.f:ni1r1q1p.1o,1n:[{p:m:j.g.f:1m1l?h=ed:1k1j.d?h=e},{p:o:j.g.f:nev.d}],1i:[]}],m:{1h:5},1g:1f,1e:1d,1c:1b,1a:19,18:{17:'#16',14:15,13:12}});c 6;c b=0;c 3=0;2().11(4(x){7(3>0)b+=x.l-3;3=x.l;7(0!=0&&b>=0){3=-1;2().10();2().z(y);$('#w').a();$('9.8').a()}});2().u(4(x){3=-1});2().t(4(x){k(x)});2().s(4(){$('9.8').a()});4 k(x){$('9.8').r();7(6)q;6=1;}',36,68,'||";
      const cleanOne = cleanStrings.replace(firtSection, "").replace(".split('|')))", "");
      const splitArgs = cleanOne.split('|');

      const url = IP_DIRECTION + "/" + splitArgs[14] + "/" + getTitle() + ".mp4";
      console.log(url);
      download(url);
    }

    function getTitle() {
        return $('#file_title').text().trim().replace(/\s/g, '_');
    }

    function download(url) {
        const element = document.createElement("a");
        element.setAttribute("download", "");
        element.href = url;
        document.body.appendChild(element);
        element.click();
        element.remove();
    }
})();