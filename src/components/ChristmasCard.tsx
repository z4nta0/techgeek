import snowman from '../assets/snowman.png';
import background from '../assets/background.jpg';
import { useEffect } from 'react';



function ChristmasCard () {

    let a = {
        flakeCount: 35,
        flakeColor: "#ffffff",
        flakeIndex: 999999,
        minSize: 1,
        maxSize: 2,
        minSpeed: 1,
        maxSpeed: 5,
        round: !1,
        shadow: !1,
        collection: !1,
        image: !1,
        collectionHeight: 40,
    };
    let b = {};
    let c = [];
    let g = 0;
    let m = 0;
    let j = 0;
    let k = 0;
    let l = 0;
    let h = 0;
    let f = 0;
    
    let e = (a, b) => {
        return Math.round(a + Math.random() * (b - a));
    };
    let n = (a, b) => {
        for (var c in b)
            a.style[c] =
                b[c] + ("width" == c || "height" == c || 0 <= c.toLowerCase().indexOf("radius") ? "px" : "");
    };
    function r (d, b, c, g, f) {
        this.id = f;
        this.x = d + l;
        this.y = b + k;
        this.size = c;
        this.speed = g;
        this.step = 0;
        this.stepSize = e(1, 10) / 100;
        a.collection && (this.target = canvasCollection[e(0, canvasCollection.length - 1)]);
        d = null;
        a.image
            ? ((d = new Image()), (d.src = a.image))
            : ((d = document.createElement("div")), n(d, { background: a.flakeColor }));
        d.className = "snowfall-flakes";
        d.setAttribute("id", "flake-" + this.id);
        n(d, {
            width: this.size,
            height: this.size,
            position: "absolute",
            top: this.y,
            left: this.x,
            fontSize: 0,
            zIndex: a.flakeIndex,
        });
        a.round &&
            (d.style,
            n(d, {
                "-moz-border-radius": a.maxSize,
                "-webkit-border-radius": a.maxSize,
                borderRadius: a.maxSize,
            }));
        a.shadow &&
            n(d, { boxShadow: "1px 1px 1px #555"});
        document.body.appendChild(d);
        this.element = d;
        this.update = () => {
            this.y += this.speed;
            this.y > k + m - (this.size + 6) && this.reset();
            this.element.style.top = this.y + "px";
            this.element.style.left = ~~this.x + "px";
            this.step += this.stepSize;
            this.x += Math.cos(this.step);
            (this.x > l + j - h || this.x < h) && this.reset();
        };
        this.reset = () => {
            this.y = k;
            this.x = l + e(h, j - h);
            this.stepSize = e(1, 10) / 100;
            this.size = e(100 * a.minSize, 100 * a.maxSize) / 100;
            this.speed = e(a.minSpeed, a.maxSpeed);
        };
    };
    let q = () => {
        for (var a = 0; a < c.length; a += 1) c[a].update();
        f = setTimeout(function () {
            q();
        }, 30);
    };

    var snowFall = {

        snow: (d, p) => {
            for (var f in p) a.hasOwnProperty(f) && (a[f] = p[f]);
            b = d;
            m = b.clientHeight;
            j = b.offsetWidth;
            k = b.offsetTop;
            l = b.offsetLeft;
            b.snow = this;
            "body" === b.tagName.toLowerCase() && (h = 25);
            window.onresize = function () {
                m = b.clientHeight;
                j = b.offsetWidth;
                k = b.offsetTop;
                l = b.offsetLeft;
            };
            for (let i = 0; i < a.flakeCount; i += 1)
                (g = c.length),
                    c.push(
                        new r(
                            e(h, j - h),
                            e(0, m),
                            e(100 * a.minSize, 100 * a.maxSize) / 100,
                            e(a.minSpeed, a.maxSpeed),
                            g
                        )
                    );
            q();
        },
        clear: () => {
            for (
                var a = null,
                    a = b.getElementsByClassName
                        ? b.getElementsByClassName("snowfall-flakes")
                        : b.querySelectorAll(".snowfall-flakes"),
                    e = a.length;
                e--;

            )
                b.removeChild(a[e]);
            c = [];
            clearTimeout(f);
        },
    }
/*    return {
        snow: function (a, b) {
            if ("string" == typeof b)
                if (0 < a.length) for (var c = 0; c < a.length; c++) a[c].snow && a[c].snow.clear();
                else a.snow.clear();
            else if (0 < a.length) for (c = 0; c < a.length; c++) new g().snow(a[c], b);
            else new g().snow(a, b);
        },
    };
})();*/




    useEffect( () => {

        //const body = document.querySelector( 'body' );
        const christmasCard = document.getElementById( 'christmasCard' );
        const h1 = document.getElementById( 'ccH1' );
        const p = document.getElementById( 'ccPar' );

        setTimeout( () => {

            snowFall.snow( christmasCard, {

                minSize : 1,
                maxSize : 8,
                round : true,
                minSpeed : 1,
                maxSpeed : 2,
                flakeCount : 120,

            }

        ) }, 333);
    
        //body.hide();
        //christmasCard.hide();
        //h1.hide();
        //p.hide();
        
        //body.delay( 300 ).fadeIn();
        //christmasCard.delay( 400 ).fadeIn();
        
        //h1.delay( 500 ).fadeIn( 1000 );
        
        //p.delay( 1500 ).fadeIn( 250 );

    }, []);



    return (

        <section id='christmasCard' style={{ fontSize: '16px', background: `url(${background})`, backgroundSize: 'cover', width: '700px', height: '500px', color: 'white', position: 'relative', margin: 'auto', }}>

            <h1 id='ccH1' style={{ fontFamily: "Dancing Script OT", fontSize: '3.5em', paddingTop: '0.5em', textAlign: 'center' }}>Merry Christmas, Mom!</h1>

            <img src={snowman} id="snowman" style={{ width: '13%', marginBottom: '-45%', marginLeft: '-75%', transform: 'rotateZ(5deg)', }} />

            <p id='ccPar' style={{ fontSize: '37px', position: 'absolute', bottom: 0, right: 0, marginRight: '10%', marginBottom: '5%', fontFamily: "vshandprinted", }}><span style={{ fontFamily: "Dancing Script OT", fontWeight: 'bold', fontSize: '30px', }}>From,</span> Mr. Awesome</p>

        </section>

    );

}

export default ChristmasCard;