const _0x28bbd4=_0x46c3;(function(_0xc5091,_0x18ace0){const _0x270b66=_0x46c3,_0x5968fe=_0xc5091();while(!![]){try{const _0x634904=-parseInt(_0x270b66(0xfd))/0x1+-parseInt(_0x270b66(0x169))/0x2*(parseInt(_0x270b66(0x119))/0x3)+-parseInt(_0x270b66(0x162))/0x4+parseInt(_0x270b66(0x133))/0x5*(parseInt(_0x270b66(0x10c))/0x6)+-parseInt(_0x270b66(0x13b))/0x7*(parseInt(_0x270b66(0xf0))/0x8)+parseInt(_0x270b66(0x10e))/0x9*(parseInt(_0x270b66(0x114))/0xa)+parseInt(_0x270b66(0xfb))/0xb;if(_0x634904===_0x18ace0)break;else _0x5968fe['push'](_0x5968fe['shift']());}catch(_0x199e64){_0x5968fe['push'](_0x5968fe['shift']());}}}(_0xe87b,0x72a0f));import*as _0x4bdc13 from'../three/build/three.module.js';import{GLTFLoader}from'../three/loaders/GLTFLoader.js';import{FBXLoader}from'../three/loaders/FBXLoader.js';import{FontLoader}from'../three/loaders/FontLoader.js';function _0x46c3(_0x3d04dd,_0x11ace5){const _0xe87bcb=_0xe87b();return _0x46c3=function(_0x46c374,_0x217160){_0x46c374=_0x46c374-0xee;let _0xc0999d=_0xe87bcb[_0x46c374];return _0xc0999d;},_0x46c3(_0x3d04dd,_0x11ace5);}import{TextGeometry}from'../three/geometries/TextGeometry.js';import{OrbitControls}from'../three/controls/OrbitControls.js';import{RoomEnvironment}from'../three/environment/RoomEnvironment.js';const queryString=window[_0x28bbd4(0x146)][_0x28bbd4(0x112)],urlParams=new URLSearchParams(queryString);let age=0x11;if(urlParams[_0x28bbd4(0x160)]('age'))age=urlParams[_0x28bbd4(0xfe)]('age');let name='Memory\x20AR';if(urlParams[_0x28bbd4(0x160)](_0x28bbd4(0x16d)))name=urlParams[_0x28bbd4(0xfe)]('name');let from=_0x28bbd4(0x14b);if(urlParams[_0x28bbd4(0x160)](_0x28bbd4(0xf7)))from=urlParams['get'](_0x28bbd4(0xf7));from['length']>0x14&&(from=from[_0x28bbd4(0xee)](0x0,0x14));const THREEMindJs=window[_0x28bbd4(0x10d)]['IMAGE'][_0x28bbd4(0x15d)],mindarThree=new window[(_0x28bbd4(0x10d))][(_0x28bbd4(0x10a))]['MindARThree']({'container':document[_0x28bbd4(0x155)](_0x28bbd4(0x12e)),'imageTargetSrc':_0x28bbd4(0x11c)});var containerMind=document[_0x28bbd4(0x168)](_0x28bbd4(0x144));let controls,touchDown,touchX,touchY,deltaX,deltaY;const {renderer,scene,camera}=mindarThree,anchor=mindarThree['addAnchor'](0x0),anchor2=mindarThree[_0x28bbd4(0x14f)](0x1),loader=new FBXLoader(),loaderGlb=new GLTFLoader();let cameraThree,sceneThree,rendererThree,containerThree,is3D=!![];anchor['onTargetFound']=()=>{const _0x2e0428=_0x28bbd4;anchor[_0x2e0428(0xfa)][_0x2e0428(0x164)](objectGroup),console[_0x2e0428(0x139)](_0x2e0428(0x12d)),gtag(_0x2e0428(0x154),{'action':_0x2e0428(0x136),'source':_0x2e0428(0x11e)});},anchor['onTargetLost']=()=>{const _0x308482=_0x28bbd4;console[_0x308482(0x139)]('target\x201\x20lost'),gtag('marker',{'action':'target_qr_lost','source':_0x308482(0x11e)});},anchor2[_0x28bbd4(0x128)]=()=>{const _0x514b9d=_0x28bbd4;anchor2[_0x514b9d(0xfa)][_0x514b9d(0x164)](objectGroup),console[_0x514b9d(0x139)](_0x514b9d(0x113)),gtag(_0x514b9d(0x154),{'action':_0x514b9d(0x165),'source':_0x514b9d(0x11e)});},anchor2['onTargetLost']=()=>{const _0x1f71d9=_0x28bbd4;console['log'](_0x1f71d9(0x111)),gtag(_0x1f71d9(0x154),{'action':'target_marker_lost','source':'birthday'});};const objectGroup=new _0x4bdc13[(_0x28bbd4(0x15f))](),sceneGroup=new _0x4bdc13[(_0x28bbd4(0x15f))](),clock=new _0x4bdc13['Clock']();let mixer;function _0xe87b(){const _0x35c736=['MeshPhongMaterial','Color','stop','addAnchor','../assets/models/fbx/birthdaycake.glb','clipAction','Mesh','Anton_Regular','marker','querySelector','SphereBufferGeometry','render','mousemove','update','WebGLRenderer','setSize',':checked','THREE','receiveShadow','Group','has','bottom','732460aWzIYi','outputEncoding','add','target_marker_found','touchup','scene','getElementById','8896SqIcWY','start','touchmove','preventDefault','name','shadow','setAnimationLoop','none','slice','setClearColor','8KgJZGK','rotate\x20','min','display','body','map','pageX','from','target','removeEventListener','group','9414933BJvEFe','enabled','20244ngbvaP','get','domElement','aspect','\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20time;\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20hValue;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//https://thebookofshaders.com/11/\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x202D\x20Random\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20random\x20(in\x20vec2\x20st)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20fract(sin(dot(st.xy,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2(12.9898,78.233)))\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x2043758.5453123);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x202D\x20Noise\x20based\x20on\x20Morgan\x20McGuire\x20@morgan3d\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20https://www.shadertoy.com/view/4dS3Wd\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20noise\x20(in\x20vec2\x20st)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20i\x20=\x20floor(st);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20f\x20=\x20fract(st);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Four\x20corners\x20in\x202D\x20of\x20a\x20tile\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20a\x20=\x20random(i);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20b\x20=\x20random(i\x20+\x20vec2(1.0,\x200.0));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20c\x20=\x20random(i\x20+\x20vec2(0.0,\x201.0));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20d\x20=\x20random(i\x20+\x20vec2(1.0,\x201.0));\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Smooth\x20Interpolation\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Cubic\x20Hermine\x20Curve.\x20\x20Same\x20as\x20SmoothStep()\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20u\x20=\x20f*f*(3.0-2.0*f);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20u\x20=\x20smoothstep(0.,1.,f);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Mix\x204\x20coorners\x20percentages\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20mix(a,\x20b,\x20u.x)\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(c\x20-\x20a)*\x20u.y\x20*\x20(1.0\x20-\x20u.x)\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(d\x20-\x20b)\x20*\x20u.x\x20*\x20u.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20pos\x20=\x20position;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pos\x20*=\x20vec3(0.8,\x202,\x200.725);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20hValue\x20=\x20position.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//float\x20sinT\x20=\x20sin(time\x20*\x202.)\x20*\x200.5\x20+\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20posXZlen\x20=\x20length(position.xz);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pos.y\x20*=\x201.\x20+\x20(cos((posXZlen\x20+\x200.25)\x20*\x203.1415926)\x20*\x200.25\x20+\x20noise(vec2(0,\x20time))\x20*\x200.125\x20+\x20noise(vec2(position.x\x20+\x20time,\x20position.z\x20+\x20time))\x20*\x200.5)\x20*\x20position.y;\x20//\x20flame\x20height\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pos.x\x20+=\x20noise(vec2(time\x20*\x202.,\x20(position.y\x20-\x20time)\x20*\x204.0))\x20*\x20hValue\x20*\x200.0312;\x20//\x20flame\x20trembling\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pos.z\x20+=\x20noise(vec2((position.y\x20-\x20time)\x20*\x204.0,\x20time\x20*\x202.))\x20*\x20hValue\x20*\x200.0312;\x20//\x20flame\x20trembling\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20modelViewMatrix\x20*\x20vec4(pos,1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20','camera','pageY','position','animations','Scene','side','max','PerspectiveCamera','IMAGE','rotation','87186NvvKln','MINDAR','18EXdBeq','MeshStandardMaterial','DirectionalLight','target\x202\x20lost','search','target\x202\x20found','2900950EmpbOU','setFromVector3','devicePixelRatio','updateProjectionMatrix','transparent','492XVjqyL','getDelta','change','../assets/marker/birthday/birthday.mind','scale','birthday','play','fromScene','style','shadowMap','length','mouseup','top','boundingBox','DoubleSide','onTargetFound','traverse','innerHeight','block','isMesh','target\x201\x20found','#container','../assets/fonts/','load','AmbientLight','toString','5HDeKvJ','setPixelRatio','mousedown','target_qr_found','translate','touchdown','log','appendChild','337918PijLYO','castShadow','left','FrontSide','set','addEventListener','Vector3','material','sRGBEncoding','container','.json','location','PMREMGenerator','HemisphereLight','screen_view','innerWidth','Memory\x20AR'];_0xe87b=function(){return _0x35c736;};return _0xe87b();}init3D();let posText=new _0x4bdc13[(_0x28bbd4(0x141))](-0.1,0.21,0.05),posText3=new _0x4bdc13[(_0x28bbd4(0x141))](-0.09,0.205,0.058),rotText=new _0x4bdc13[(_0x28bbd4(0x141))](Math['PI']/0xb4*-0xf,0x0,0x0),posText2=new _0x4bdc13[(_0x28bbd4(0x141))](-0.1,0.21,-0.05),rotText2=new _0x4bdc13['Vector3'](0x0,0x0,0x0),posTextFrom=new _0x4bdc13[(_0x28bbd4(0x141))](0.3,0.075,0.03),rotTextFrom=new _0x4bdc13['Vector3'](Math['PI']/0xb4*-0x46,0x0,0x0);name[_0x28bbd4(0x123)]>0x0&&(initText3D(name,posText,rotText,0.08,0.03,new _0x4bdc13[(_0x28bbd4(0x14d))](0xd622c1),new _0x4bdc13[(_0x28bbd4(0x14d))](0x0),_0x28bbd4(0x153)),initText3D(name,posText3,rotText,0.08,0.02,new _0x4bdc13[(_0x28bbd4(0x14d))](0x0),new _0x4bdc13['Color'](0x0),_0x28bbd4(0x153)));from[_0x28bbd4(0x123)]>0x0&&initText3D(from,posTextFrom,rotTextFrom,0.015,0.001,new _0x4bdc13[(_0x28bbd4(0x14d))](0xd622c1),new _0x4bdc13['Color'](0x0),_0x28bbd4(0x153));if(age<0xa){age<0x0&&(age=0x0);if(age>0x0){let posFire=new _0x4bdc13[(_0x28bbd4(0x141))](-0.08,-0.52,-0.035),rotYFire=-0x2d;initFire(0.025,posFire,rotYFire);}}else{age>0x63&&(age=0x63);let posFire=new _0x4bdc13[(_0x28bbd4(0x141))](-0.02,-0.52,-0.035),rotYFire=-0x2d;initFire(0.025,posFire,rotYFire);let posFire2=new _0x4bdc13[(_0x28bbd4(0x141))](-0.15,-0.52,-0.035),rotYFire2=-0x2d;initFire(0.025,posFire2,rotYFire2);}age>0x0&&initText3D(age[_0x28bbd4(0x132)](),posText2,rotText2,0.25,0.04,new _0x4bdc13[(_0x28bbd4(0x14d))](0x95aef9),new _0x4bdc13[(_0x28bbd4(0x14d))](0x100003),'Anton_Regular');InitLighting(),LoadGLB(loaderGlb,_0x28bbd4(0x150),objectGroup,-0.14,0x0,0x0),sceneThree[_0x28bbd4(0x164)](sceneGroup),sceneThree[_0x28bbd4(0x164)](objectGroup),objectGroup['position'][_0x28bbd4(0x13f)](0x0,0x0,0x0),objectGroup[_0x28bbd4(0x11d)][_0x28bbd4(0x13f)](0x1f4,0x1f4,0x1f4),renderer[_0x28bbd4(0x16f)](()=>{const _0x43fa8f=_0x28bbd4;if(mixer)mixer[_0x43fa8f(0x159)](clock[_0x43fa8f(0x11a)]());rendererThree['render'](sceneThree,cameraThree);}),containerMind[_0x28bbd4(0x121)][_0x28bbd4(0xf3)]=_0x28bbd4(0x170),window['addEventListener']('resize',onWindowResize,!![]),console['log']('hehe\x20onWindowResize');const start=async()=>{const _0x22417e=_0x28bbd4;is3D=![],containerThree['style'][_0x22417e(0xf3)]='none',containerMind[_0x22417e(0x121)]['display']=_0x22417e(0x12b),await mindarThree[_0x22417e(0x16a)](),renderer[_0x22417e(0x16f)](()=>{const _0x6f0319=_0x22417e;if(mixer)mixer[_0x6f0319(0x159)](clock[_0x6f0319(0x11a)]());renderer[_0x6f0319(0x157)](scene,camera);}),anchor['group'][_0x22417e(0x164)](objectGroup),scene[_0x22417e(0x164)](sceneGroup),objectGroup[_0x22417e(0x104)][_0x22417e(0x13f)](0x0,-0.3,0x0),objectGroup[_0x22417e(0x10b)][_0x22417e(0x115)](new _0x4bdc13[(_0x22417e(0x141))](Math['PI']/0x14,0x0,0x0)),objectGroup['scale'][_0x22417e(0x13f)](0x1,0x1,0x1),window[_0x22417e(0x140)]('mousedown',MouseDownEvent,!![]),window['addEventListener'](_0x22417e(0x124),MouseUpEvent,!![]),window[_0x22417e(0x140)](_0x22417e(0x158),MouseMoveEvent,!![]),window[_0x22417e(0x140)](_0x22417e(0x138),MouseDownEvent,!![]),window['addEventListener'](_0x22417e(0x166),MouseUpEvent,!![]),window[_0x22417e(0x140)]('touchmove',MouseMoveEvent,!![]),gtag('event',_0x22417e(0x149),{'screen_name':'ar_mode','screen_class':_0x22417e(0x11e)});};function onWindowResize(){const _0x28ec0b=_0x28bbd4;console['log']('onWindowResize'),cameraThree[_0x28ec0b(0x100)]=window[_0x28ec0b(0x14a)]/window[_0x28ec0b(0x12a)],cameraThree[_0x28ec0b(0x117)](),rendererThree[_0x28ec0b(0x15b)](window[_0x28ec0b(0x14a)],window['innerHeight']);}const stop=async()=>{const _0x1cbf82=_0x28bbd4;is3D=!![],await mindarThree[_0x1cbf82(0x14e)](),containerMind['style'][_0x1cbf82(0xf3)]=_0x1cbf82(0x170),containerThree[_0x1cbf82(0x121)][_0x1cbf82(0xf3)]=_0x1cbf82(0x12b),mindarThree['stop'](),renderer[_0x1cbf82(0x16f)](()=>{const _0xf8927b=_0x1cbf82;if(mixer)mixer[_0xf8927b(0x159)](clock[_0xf8927b(0x11a)]());rendererThree[_0xf8927b(0x157)](sceneThree,cameraThree);}),sceneThree[_0x1cbf82(0x164)](sceneGroup),sceneThree[_0x1cbf82(0x164)](objectGroup),objectGroup[_0x1cbf82(0x104)][_0x1cbf82(0x13f)](0x0,0x0,0x0),objectGroup[_0x1cbf82(0x11d)][_0x1cbf82(0x13f)](0x1f4,0x1f4,0x1f4),window['removeEventListener'](_0x1cbf82(0x135),MouseDownEvent,!![]),window[_0x1cbf82(0xf9)](_0x1cbf82(0x124),MouseUpEvent,!![]),window['removeEventListener']('mousemove',MouseMoveEvent,!![]),window['removeEventListener'](_0x1cbf82(0x138),MouseDownEvent,!![]),window[_0x1cbf82(0xf9)](_0x1cbf82(0x166),MouseUpEvent,!![]),window[_0x1cbf82(0xf9)](_0x1cbf82(0x16b),MouseMoveEvent,!![]),gtag('event',_0x1cbf82(0x149),{'screen_name':'3d_mode','screen_class':_0x1cbf82(0x11e)});};function initFire(_0x593b2a,_0x5cca94,_0x595e53){var _0x368dbd=[];function _0x29c7c5(_0x4617f9){const _0x4c9cd6=_0x46c3;let _0x81ee60=new _0x4bdc13[(_0x4c9cd6(0x156))](_0x593b2a,0x20,0x20);_0x81ee60[_0x4c9cd6(0x137)](0x0,0.5,0x0);let _0x5a5763=getFlameMaterial(!![]);_0x368dbd['push'](_0x5a5763);let _0xdc7b55=new _0x4bdc13[(_0x4c9cd6(0x152))](_0x81ee60,_0x5a5763);_0xdc7b55[_0x4c9cd6(0x104)][_0x4c9cd6(0x13f)](_0x5cca94['x'],_0x5cca94['y'],_0x5cca94['z']),_0xdc7b55[_0x4c9cd6(0x10b)]['y']=_0x595e53,objectGroup[_0x4c9cd6(0x164)](_0xdc7b55);}_0x29c7c5(![]),_0x29c7c5(!![]);}function initText3D(_0x33b0ae,_0xd0e96,_0x42f380,_0x16168b,_0xfe0e73,_0xd6f4fc,_0x417ae0,_0x48cf37){const _0x58ba97=_0x28bbd4,_0x3bc2b1=new FontLoader();_0x3bc2b1['load'](_0x58ba97(0x12f)+_0x48cf37+_0x58ba97(0x145),function(_0x432df4){const _0x100223=_0x58ba97,_0x3d33fd=new TextGeometry(_0x33b0ae,{'font':_0x432df4,'size':_0x16168b,'height':_0xfe0e73});_0x3d33fd['computeBoundingBox']();const _0x8cd30d=-0.5*(_0x3d33fd['boundingBox'][_0x100223(0x108)]['x']-_0x3d33fd[_0x100223(0x126)][_0x100223(0xf2)]['x']),_0xd9dfa8=new _0x4bdc13[(_0x100223(0x152))](_0x3d33fd,[new _0x4bdc13[(_0x100223(0x14c))]({'color':_0xd6f4fc}),new _0x4bdc13[(_0x100223(0x14c))]({'color':_0x417ae0})]);_0xd9dfa8[_0x100223(0x13c)]=!![],_0xd9dfa8[_0x100223(0x104)]['y']=_0xd0e96['y'],_0xd9dfa8[_0x100223(0x104)]['z']=_0xd0e96['z'],_0xd9dfa8[_0x100223(0x104)]['x']=_0x8cd30d+_0xd0e96['x'],_0xd9dfa8[_0x100223(0x10b)]['y']=_0x42f380['y'],_0xd9dfa8[_0x100223(0x10b)]['z']=_0x42f380['z'],_0xd9dfa8[_0x100223(0x10b)]['x']=_0x42f380['x'],objectGroup[_0x100223(0x164)](_0xd9dfa8);});}function getFlameMaterial(_0x2d49c1){const _0x143474=_0x28bbd4;let _0x4bdcb0=_0x2d49c1?_0x4bdc13[_0x143474(0x13e)]:_0x4bdc13['BackSide'];return new _0x4bdc13['ShaderMaterial']({'uniforms':{'time':{'value':0x0}},'vertexShader':_0x143474(0x101),'fragmentShader':'\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20hValue;\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20honestly\x20stolen\x20from\x20https://www.shadertoy.com/view/4dsSzr\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20heatmapGradient(float\x20t)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20clamp((pow(t,\x201.5)\x20*\x200.8\x20+\x200.2)\x20*\x20vec3(smoothstep(0.0,\x200.35,\x20t)\x20+\x20t\x20*\x200.5,\x20smoothstep(0.5,\x201.0,\x20t),\x20max(1.0\x20-\x20t\x20*\x201.7,\x20t\x20*\x207.0\x20-\x206.0)),\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20v\x20=\x20abs(smoothstep(0.0,\x200.4,\x20hValue)\x20-\x201.);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20alpha\x20=\x20(1.\x20-\x20v)\x20*\x200.99;\x20//\x20bottom\x20transparency\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20alpha\x20-=\x201.\x20-\x20smoothstep(1.0,\x200.97,\x20hValue);\x20//\x20tip\x20transparency\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(heatmapGradient(smoothstep(0.0,\x200.3,\x20hValue))\x20*\x20vec3(0.95,0.95,0.4),\x20alpha)\x20;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor.rgb\x20=\x20mix(vec3(0,0,1),\x20gl_FragColor.rgb,\x20smoothstep(0.0,\x200.3,\x20hValue));\x20//\x20blueish\x20for\x20bottom\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor.rgb\x20+=\x20vec3(1,\x200.9,\x200.5)\x20*\x20(1.25\x20-\x20vUv.y);\x20//\x20make\x20the\x20midst\x20brighter\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor.rgb\x20=\x20mix(gl_FragColor.rgb,\x20vec3(0.66,\x200.32,\x200.03),\x20smoothstep(0.95,\x201.,\x20hValue));\x20//\x20tip\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20','transparent':!![],'side':_0x4bdcb0});}function LoadFBX(_0x2b8c8e,_0x1a8b92,_0x497eb3){_0x2b8c8e['load'](_0x1a8b92,function(_0x55baf3){const _0x49762e=_0x46c3;if(_0x55baf3[_0x49762e(0x105)][_0x49762e(0x123)]>0x0){mixer=new _0x4bdc13['AnimationMixer'](_0x55baf3);const _0x325738=mixer[_0x49762e(0x151)](_0x55baf3[_0x49762e(0x105)][0x0]);_0x325738[_0x49762e(0x11f)]();}_0x55baf3[_0x49762e(0x129)](function(_0x1bacf4){const _0x2ce5ae=_0x49762e;_0x1bacf4[_0x2ce5ae(0x12c)]&&(_0x1bacf4[_0x2ce5ae(0x13c)]=!![],_0x1bacf4[_0x2ce5ae(0x15e)]=!![]);}),_0x55baf3[_0x49762e(0x11d)][_0x49762e(0x13f)](0.005,0.005,0.005),_0x497eb3[_0x49762e(0x164)](_0x55baf3);});}function LoadGLB(_0x166722,_0x2b2b4a,_0x82db7d,_0xf988fe,_0x5245cf,_0x2af675){const _0x3dbdff=_0x28bbd4;_0x166722[_0x3dbdff(0x130)](_0x2b2b4a,function(_0x53e310){const _0x2adfb8=_0x3dbdff;if(_0x53e310['animations'][_0x2adfb8(0x123)]>0x0){mixer=new _0x4bdc13['AnimationMixer'](_0x53e310);const _0x5a6841=mixer[_0x2adfb8(0x151)](_0x53e310[_0x2adfb8(0x105)][0x0]);_0x5a6841[_0x2adfb8(0x11f)]();}let _0x2064bf=_0x53e310[_0x2adfb8(0x167)];_0x2064bf[_0x2adfb8(0x129)](_0x1cad36=>{const _0x589301=_0x2adfb8;if(_0x1cad36[_0x589301(0x12c)]){let _0x2dcdbe=new _0x4bdc13[(_0x589301(0x10f))]();_0x2dcdbe[_0x589301(0x118)]=!![],_0x2dcdbe[_0x589301(0x107)]=THREEMindJs[_0x589301(0x127)],_0x1cad36['castShadow']=!![],_0x1cad36['receiveShadow']=!![];if(_0x1cad36[_0x589301(0x142)][_0x589301(0xf5)]){}}}),_0x53e310[_0x2adfb8(0x167)][_0x2adfb8(0x11d)]['set'](0.05,0.05,0.05),_0x53e310[_0x2adfb8(0x167)][_0x2adfb8(0x104)][_0x2adfb8(0x13f)](_0xf988fe,_0x5245cf,_0x2af675),_0x82db7d[_0x2adfb8(0x164)](_0x53e310[_0x2adfb8(0x167)]);});}function InitLighting(){const _0xb5c6af=_0x28bbd4,_0x41c6d6=new _0x4bdc13[(_0xb5c6af(0x148))](0xffffff,0x444444);_0x41c6d6[_0xb5c6af(0x104)][_0xb5c6af(0x13f)](0x0,0xc8,0x0);const _0x539281=new _0x4bdc13[(_0xb5c6af(0x131))](0x404040);sceneGroup[_0xb5c6af(0x164)](_0x539281);const _0x4325f7=new _0x4bdc13[(_0xb5c6af(0x110))](0xffffff,0x1);_0x4325f7[_0xb5c6af(0x104)][_0xb5c6af(0x13f)](0x0,0xc8,0x64),_0x4325f7['castShadow']=!![],_0x4325f7[_0xb5c6af(0x16e)][_0xb5c6af(0x102)][_0xb5c6af(0x125)]=0xb4,_0x4325f7[_0xb5c6af(0x16e)][_0xb5c6af(0x102)][_0xb5c6af(0x161)]=-0x64,_0x4325f7[_0xb5c6af(0x16e)]['camera'][_0xb5c6af(0x13d)]=-0x78,_0x4325f7[_0xb5c6af(0x16e)][_0xb5c6af(0x102)]['right']=0x78,sceneGroup[_0xb5c6af(0x164)](_0x4325f7);}function init3D(){const _0x530eae=_0x28bbd4;containerThree=document['createElement']('div'),document[_0x530eae(0xf4)][_0x530eae(0x13a)](containerThree),cameraThree=new _0x4bdc13[(_0x530eae(0x109))](0x3c,window[_0x530eae(0x14a)]/window[_0x530eae(0x12a)],0.1,0x2710);let _0x3e3ee7=window[_0x530eae(0x12a)]/window[_0x530eae(0x14a)];_0x3e3ee7<0x1&&(_0x3e3ee7=0x1);cameraThree[_0x530eae(0x104)]['set'](0x64*_0x3e3ee7,0x12c*_0x3e3ee7,0x1f4*_0x3e3ee7),sceneThree=new _0x4bdc13[(_0x530eae(0x106))](),sceneThree['background']=null,rendererThree=new _0x4bdc13[(_0x530eae(0x15a))]({'antialias':!![],'alpha':!![]}),rendererThree[_0x530eae(0x134)](window[_0x530eae(0x116)]),rendererThree[_0x530eae(0x15b)](window['innerWidth'],window[_0x530eae(0x12a)]),rendererThree[_0x530eae(0x122)][_0x530eae(0xfc)]=!![],rendererThree[_0x530eae(0x163)]=_0x4bdc13[_0x530eae(0x143)],rendererThree[_0x530eae(0xef)](0x0,0x0),containerThree[_0x530eae(0x13a)](rendererThree[_0x530eae(0xff)]);const _0x46876c=new _0x4bdc13[(_0x530eae(0x147))](rendererThree);sceneThree['environment']=_0x46876c[_0x530eae(0x120)](new RoomEnvironment(),0.04)['texture'],controls=new OrbitControls(cameraThree,rendererThree['domElement']),controls[_0x530eae(0xf8)]['set'](0x0,0x46,0x0),sceneThree['rotateY'](0.3),controls[_0x530eae(0x159)]();}function rotateObject(){const _0x382a56=_0x28bbd4;console[_0x382a56(0x139)](_0x382a56(0xf1)+deltaX),objectGroup&&!is3D&&(objectGroup[_0x382a56(0x10b)]['y']+=deltaX/0x64);}function MouseDownEvent(_0x37000a){const _0x398961=_0x28bbd4;_0x37000a[_0x398961(0x16c)](),touchDown=!![],touchX=_0x37000a[_0x398961(0xf6)],touchY=_0x37000a[_0x398961(0x103)];}function MouseUpEvent(_0x4d21ac){_0x4d21ac['preventDefault'](),touchDown=![];}function MouseMoveEvent(_0x4d046e){const _0x58a62a=_0x28bbd4;_0x4d046e[_0x58a62a(0x16c)]();if(!touchDown)return;deltaX=_0x4d046e[_0x58a62a(0xf6)]-touchX,deltaY=_0x4d046e['pageY']-touchY,touchX=_0x4d046e[_0x58a62a(0xf6)],touchY=_0x4d046e[_0x58a62a(0x103)],rotateObject();}$('.switch3\x20input')['on'](_0x28bbd4(0x11b),function(){const _0x5a5212=_0x28bbd4;$(this)['is'](_0x5a5212(0x15c))?start():stop();});