const _0x493d40=_0x37e1;(function(_0x41dab3,_0x318f7e){const _0x3589a5=_0x37e1,_0x5144f8=_0x41dab3();while(!![]){try{const _0x5be5a3=-parseInt(_0x3589a5(0x176))/0x1*(-parseInt(_0x3589a5(0x1aa))/0x2)+-parseInt(_0x3589a5(0x19b))/0x3*(parseInt(_0x3589a5(0x1f1))/0x4)+parseInt(_0x3589a5(0x172))/0x5+-parseInt(_0x3589a5(0x1cb))/0x6*(-parseInt(_0x3589a5(0x16f))/0x7)+parseInt(_0x3589a5(0x18a))/0x8+parseInt(_0x3589a5(0x18f))/0x9+parseInt(_0x3589a5(0x1af))/0xa*(-parseInt(_0x3589a5(0x179))/0xb);if(_0x5be5a3===_0x318f7e)break;else _0x5144f8['push'](_0x5144f8['shift']());}catch(_0x4dbae8){_0x5144f8['push'](_0x5144f8['shift']());}}}(_0x3bd1,0x38f44));import*as _0x3301cc from'../three/build/three.module.js';import{GLTFLoader}from'../three/loaders/GLTFLoader.js';import{FBXLoader}from'../three/loaders/FBXLoader.js';import{FontLoader}from'../three/loaders/FontLoader.js';import{TextGeometry}from'../three/geometries/TextGeometry.js';import{OrbitControls}from'../three/controls/OrbitControls.js';import{RoomEnvironment}from'../three/environment/RoomEnvironment.js';import{config}from'../module/module.js';const titleProject='fam-01',queryString=window[_0x493d40(0x17f)]['search'],urlParams=new URLSearchParams(queryString);let videoObject,textureVideo,videoMesh;const objectGroup=new _0x3301cc['Group'](),markedObject=new _0x3301cc[(_0x493d40(0x1cc))](),sceneGroup=new _0x3301cc['Group'](),clock=new _0x3301cc[(_0x493d40(0x1a3))]();let mixer,showStartARButton=!![];const startARButton=document[_0x493d40(0x186)](_0x493d40(0x1dc)),resetARButton=document['getElementById'](_0x493d40(0x1cd));function _0x37e1(_0xcea7f3,_0x2b5ce2){const _0x3bd17e=_0x3bd1();return _0x37e1=function(_0x37e164,_0x5c3e5a){_0x37e164=_0x37e164-0x164;let _0x2cafdc=_0x3bd17e[_0x37e164];return _0x2cafdc;},_0x37e1(_0xcea7f3,_0x2b5ce2);}function _0x3bd1(){const _0x34565d=['playbackRate','animations','.json','playsInline','WebGLRenderer','FrontSide','HAVE_ENOUGH_DATA','https://nawamesta-assets.s3.ap-southeast-1.amazonaws.com/assets/video/movie_010.mp4','test','pageX','enabled','ShaderMaterial','isMesh','push','RGBFormat','390uiCLsm','Group','resetButton','\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20time;\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20hValue;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//https://thebookofshaders.com/11/\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x202D\x20Random\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20random\x20(in\x20vec2\x20st)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20fract(sin(dot(st.xy,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2(12.9898,78.233)))\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*\x2043758.5453123);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x202D\x20Noise\x20based\x20on\x20Morgan\x20McGuire\x20@morgan3d\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20https://www.shadertoy.com/view/4dS3Wd\x0a\x20\x20\x20\x20\x20\x20\x20\x20float\x20noise\x20(in\x20vec2\x20st)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20i\x20=\x20floor(st);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20f\x20=\x20fract(st);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Four\x20corners\x20in\x202D\x20of\x20a\x20tile\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20a\x20=\x20random(i);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20b\x20=\x20random(i\x20+\x20vec2(1.0,\x200.0));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20c\x20=\x20random(i\x20+\x20vec2(0.0,\x201.0));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20d\x20=\x20random(i\x20+\x20vec2(1.0,\x201.0));\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Smooth\x20Interpolation\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Cubic\x20Hermine\x20Curve.\x20\x20Same\x20as\x20SmoothStep()\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec2\x20u\x20=\x20f*f*(3.0-2.0*f);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20u\x20=\x20smoothstep(0.,1.,f);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Mix\x204\x20coorners\x20percentages\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20mix(a,\x20b,\x20u.x)\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(c\x20-\x20a)*\x20u.y\x20*\x20(1.0\x20-\x20u.x)\x20+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(d\x20-\x20b)\x20*\x20u.x\x20*\x20u.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20pos\x20=\x20position;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pos\x20*=\x20vec3(0.8,\x202,\x200.725);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20hValue\x20=\x20position.y;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//float\x20sinT\x20=\x20sin(time\x20*\x202.)\x20*\x200.5\x20+\x200.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20posXZlen\x20=\x20length(position.xz);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pos.y\x20*=\x201.\x20+\x20(cos((posXZlen\x20+\x200.25)\x20*\x203.1415926)\x20*\x200.25\x20+\x20noise(vec2(0,\x20time))\x20*\x200.125\x20+\x20noise(vec2(position.x\x20+\x20time,\x20position.z\x20+\x20time))\x20*\x200.5)\x20*\x20position.y;\x20//\x20flame\x20height\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pos.x\x20+=\x20noise(vec2(time\x20*\x202.,\x20(position.y\x20-\x20time)\x20*\x204.0))\x20*\x20hValue\x20*\x200.0312;\x20//\x20flame\x20trembling\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pos.z\x20+=\x20noise(vec2((position.y\x20-\x20time)\x20*\x204.0,\x20time\x20*\x202.))\x20*\x20hValue\x20*\x200.0312;\x20//\x20flame\x20trembling\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20modelViewMatrix\x20*\x20vec4(pos,1.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20','magFilter','touchmove','domElement','pageY','crossOrigin','marker','castShadow','\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec3\x20keyColor;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20similarity;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20smoothness;\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20map;\x0a\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20videoColor\x20=\x20texture2D(map,\x20vUv);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20Y1\x20=\x200.299\x20*\x20keyColor.r\x20+\x200.587\x20*\x20keyColor.g\x20+\x200.114\x20*\x20keyColor.b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20Cr1\x20=\x20keyColor.r\x20-\x20Y1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20Cb1\x20=\x20keyColor.b\x20-\x20Y1;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20Y2\x20=\x200.299\x20*\x20videoColor.r\x20+\x200.587\x20*\x20videoColor.g\x20+\x200.114\x20*\x20videoColor.b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20Cr2\x20=\x20videoColor.r\x20-\x20Y2;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20Cb2\x20=\x20videoColor.b\x20-\x20Y2;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20blend\x20=\x20smoothstep(similarity,\x20similarity\x20+\x20smoothness,\x20distance(vec2(Cr2,\x20Cb2),\x20vec2(Cr1,\x20Cb1)));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(videoColor.rgb,\x20videoColor.a\x20*\x20blend);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','MeshPhongMaterial','resize','readyState','Error\x20stoped\x20video:\x20','IMAGE','startARButtonStyle','3d_mode','ar_mode','Video\x20started','target_qr_found','group','mousedown','VideoTexture','PMREMGenerator','antialias','setSize','touches','texture','traverse','PlaneGeometry','mouseup','addEventListener','getDelta','createElement','needsUpdate','outputEncoding','4euywoz','style','filterBeta','LinearFilter','translate','touchdown','BackSide','target_qr_lost','target\x201\x20found','setAnimationLoop','DoubleSide','length','MeshBasicMaterial','setClearColor','block','userAgent','.switch3\x20input','AmbientLight','clientX','querySelector','Vector3',':checked','THREE','../assets/fonts/','\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20float\x20hValue;\x0a\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20//\x20honestly\x20stolen\x20from\x20https://www.shadertoy.com/view/4dsSzr\x0a\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20heatmapGradient(float\x20t)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20clamp((pow(t,\x201.5)\x20*\x200.8\x20+\x200.2)\x20*\x20vec3(smoothstep(0.0,\x200.35,\x20t)\x20+\x20t\x20*\x200.5,\x20smoothstep(0.5,\x201.0,\x20t),\x20max(1.0\x20-\x20t\x20*\x201.7,\x20t\x20*\x207.0\x20-\x206.0)),\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20v\x20=\x20abs(smoothstep(0.0,\x200.4,\x20hValue)\x20-\x201.);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20alpha\x20=\x20(1.\x20-\x20v)\x20*\x200.99;\x20//\x20bottom\x20transparency\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20alpha\x20-=\x201.\x20-\x20smoothstep(1.0,\x200.97,\x20hValue);\x20//\x20tip\x20transparency\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(heatmapGradient(smoothstep(0.0,\x200.3,\x20hValue))\x20*\x20vec3(0.95,0.95,0.4),\x20alpha)\x20;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor.rgb\x20=\x20mix(vec3(0,0,1),\x20gl_FragColor.rgb,\x20smoothstep(0.0,\x200.3,\x20hValue));\x20//\x20blueish\x20for\x20bottom\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor.rgb\x20+=\x20vec3(1,\x200.9,\x200.5)\x20*\x20(1.25\x20-\x20vUv.y);\x20//\x20make\x20the\x20midst\x20brighter\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor.rgb\x20=\x20mix(gl_FragColor.rgb,\x20vec3(0.66,\x200.32,\x200.03),\x20smoothstep(0.95,\x201.,\x20hValue));\x20//\x20tip\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20','scene','MINDAR','clientY','position','1981pOjpjP','computeBoundingBox','receiveShadow','2132720FZstwE','rotateY','setFromVector3','Mesh','1Fcpsuv','maxTouchPoints','set','2046UjoNFK','rotation','clipAction','scale','environment','play','location','background','fromScene','onTargetFound','minFilter','min','MindARThree','getElementById','preventDefault','none','target\x201\x20lost','3290488xQzufQ','appendChild','render','log','div','3526596ZHbhDe','transparent','Scene','display','removeEventListener','start','map','touchup','load','PerspectiveCamera','screen_view','aspect','97116xEnONQ','fileterMinCF','boundingBox','side','#container','catch','DirectionalLight','SphereBufferGeometry','Clock','change','innerWidth','stop','body','shadowMap','innerHeight','81496oxCeTS','then','../assets/marked3.png','setPixelRatio','\x0a\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20void\x20main(\x20void\x20)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20modelViewMatrix\x20*\x20vec4(position,1.0);\x0a\x20\x20\x20\x20}','55010qjZRYs','update','target','devicePixelRatio','event','container','add','max','sRGBEncoding','TextureLoader','Anonymous','click','material'];_0x3bd1=function(){return _0x34565d;};return _0x3bd1();}startARButton[_0x493d40(0x1f2)][_0x493d40(0x192)]=_0x493d40(0x188),resetARButton[_0x493d40(0x1f2)][_0x493d40(0x192)]=_0x493d40(0x188),startARButton['addEventListener'](_0x493d40(0x1ba),function(){const _0x145673=_0x493d40;showStartARButton&&(showStartARButton=![],startARButton[_0x145673(0x1f2)][_0x145673(0x192)]='none',resetARButton[_0x145673(0x1f2)]['display']=_0x145673(0x1ff),objectGroup[_0x145673(0x17c)]['set'](0x1,0x1,0x1),markedObject['scale'][_0x145673(0x178)](0x0,0x0,0x0),videoObject[_0x145673(0x17e)]()[_0x145673(0x1ab)](()=>{const _0xde487b=_0x145673;console[_0xde487b(0x18d)](_0xde487b(0x1df));})[_0x145673(0x1a0)](_0x59d3cb=>{const _0x2f28e5=_0x145673;console[_0x2f28e5(0x18d)]('Error\x20starting\x20video:\x20'+_0x59d3cb);}));}),resetARButton[_0x493d40(0x1ec)](_0x493d40(0x1ba),function(){const _0x58e697=_0x493d40;startARButton[_0x58e697(0x1f2)][_0x58e697(0x192)]=_0x58e697(0x1ff),showStartARButton=!![],resetARButton[_0x58e697(0x1f2)][_0x58e697(0x192)]=_0x58e697(0x188),objectGroup[_0x58e697(0x17c)][_0x58e697(0x178)](0x0,0x0,0x0),markedObject['scale'][_0x58e697(0x178)](0x1,0x1,0x1),!videoObject&&videoObject[_0x58e697(0x1a6)]()[_0x58e697(0x1ab)](()=>{const _0x4da63c=_0x58e697;console[_0x4da63c(0x18d)]('Video\x20stoped');})[_0x58e697(0x1a0)](_0x2d39bd=>{const _0x33c5b6=_0x58e697;console[_0x33c5b6(0x18d)](_0x33c5b6(0x1da)+_0x2d39bd);});});const THREEMindJs=window['MINDAR'][_0x493d40(0x1db)][_0x493d40(0x168)],mindarThree=new window[(_0x493d40(0x16c))][(_0x493d40(0x1db))][(_0x493d40(0x185))]({'container':document[_0x493d40(0x165)](_0x493d40(0x19f)),'imageTargetSrc':'https://nawamesta-assets.s3.ap-southeast-1.amazonaws.com/assets/marker/fam-01.mind','fileterMinCF':config[_0x493d40(0x19c)],'filterBeta':config[_0x493d40(0x1f3)],'missTolerance':config['missTolerance']});var containerMind=document[_0x493d40(0x186)](_0x493d40(0x1b4));let controls,touchDown,touchX,touchY,deltaX,deltaY;const {renderer,scene,camera}=mindarThree,anchor=mindarThree['addAnchor'](0x0),loader=new FBXLoader(),loaderGlb=new GLTFLoader();renderer[_0x493d40(0x1e5)]=![],renderer[_0x493d40(0x1ad)](window['devicePixelRatio']*0.8);let cameraThree,sceneThree,rendererThree,containerThree,is3D=!![];anchor[_0x493d40(0x182)]=()=>{const _0x5b4b84=_0x493d40;anchor['group'][_0x5b4b84(0x1b5)](objectGroup),anchor[_0x5b4b84(0x1e1)][_0x5b4b84(0x1b5)](markedObject),console[_0x5b4b84(0x18d)](_0x5b4b84(0x1f9)),gtag(_0x5b4b84(0x1d4),{'action':_0x5b4b84(0x1e0),'source':titleProject}),showStartARButton?(startARButton[_0x5b4b84(0x1f2)][_0x5b4b84(0x192)]='block',resetARButton['style']['display']='none'):(startARButton[_0x5b4b84(0x1f2)][_0x5b4b84(0x192)]=_0x5b4b84(0x188),resetARButton['style'][_0x5b4b84(0x192)]='block');},anchor['onTargetLost']=()=>{const _0xc2642c=_0x493d40;console[_0xc2642c(0x18d)](_0xc2642c(0x189)),gtag('marker',{'action':_0xc2642c(0x1f8),'source':titleProject}),startARButton['style']['display']=_0xc2642c(0x188),resetARButton['style'][_0xc2642c(0x192)]=_0xc2642c(0x188);},init3D(),initMarkedObject(),initVideoObject(_0x493d40(0x1c3)),LoadGLB(loaderGlb,'https://nawamesta-assets.s3.ap-southeast-1.amazonaws.com/assets/3d/fam-001.glb',objectGroup,0x0,0.25,0.1,0.2,0.2,0.2),sceneThree[_0x493d40(0x1b5)](sceneGroup),sceneThree[_0x493d40(0x1b5)](objectGroup),objectGroup['position'][_0x493d40(0x178)](0x0,0x0,0x0),objectGroup[_0x493d40(0x17c)]['set'](0x1f4,0x1f4,0x1f4),renderer[_0x493d40(0x1fa)](()=>{const _0x23e059=_0x493d40;if(mixer)mixer[_0x23e059(0x1b0)](clock[_0x23e059(0x1ed)]());rendererThree[_0x23e059(0x18c)](sceneThree,cameraThree),videoObject[_0x23e059(0x1d9)]===videoObject[_0x23e059(0x1c2)]&&(textureVideo[_0x23e059(0x1ef)]=!![]);}),containerMind[_0x493d40(0x1f2)]['display']=_0x493d40(0x188),window[_0x493d40(0x1ec)](_0x493d40(0x1d8),onWindowResize,!![]),console[_0x493d40(0x18d)]('hehe\x20onWindowResize');const start=async()=>{const _0x279fe3=_0x493d40;is3D=![],containerThree[_0x279fe3(0x1f2)][_0x279fe3(0x192)]=_0x279fe3(0x188),containerMind[_0x279fe3(0x1f2)][_0x279fe3(0x192)]='block',await mindarThree[_0x279fe3(0x194)](),renderer['setAnimationLoop'](()=>{const _0x2a1dbc=_0x279fe3;if(mixer)mixer[_0x2a1dbc(0x1b0)](clock[_0x2a1dbc(0x1ed)]());renderer[_0x2a1dbc(0x18c)](scene,camera);}),anchor['group']['add'](objectGroup),scene[_0x279fe3(0x1b5)](sceneGroup),objectGroup['position'][_0x279fe3(0x178)](0x0,-0.3,0x0),objectGroup[_0x279fe3(0x17a)][_0x279fe3(0x174)](new _0x3301cc[(_0x279fe3(0x166))](Math['PI']/0x14,0x0,0x0)),objectGroup['scale'][_0x279fe3(0x178)](0x0,0x0,0x0),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[_0x279fe3(0x1c4)](navigator['userAgent'])&&navigator[_0x279fe3(0x177)]>0x1?(window[_0x279fe3(0x1ec)](_0x279fe3(0x1f6),TouchDownEvent,!![]),window['addEventListener'](_0x279fe3(0x196),TouchUpEvent,!![]),window[_0x279fe3(0x1ec)](_0x279fe3(0x1d0),TouchMoveEvent,!![])):(window[_0x279fe3(0x1ec)]('mousedown',MouseDownEvent,!![]),window[_0x279fe3(0x1ec)](_0x279fe3(0x1eb),MouseUpEvent,!![]),window['addEventListener']('mousemove',MouseMoveEvent,!![])),gtag('event',_0x279fe3(0x199),{'screen_name':_0x279fe3(0x1de),'screen_class':titleProject});};function onWindowResize(){const _0x3b5a0d=_0x493d40;console[_0x3b5a0d(0x18d)]('onWindowResize'),cameraThree[_0x3b5a0d(0x19a)]=window['innerWidth']/window[_0x3b5a0d(0x1a9)],cameraThree['updateProjectionMatrix'](),rendererThree[_0x3b5a0d(0x1e6)](window[_0x3b5a0d(0x1a5)],window[_0x3b5a0d(0x1a9)]);}const stop=async()=>{const _0x4d654c=_0x493d40;is3D=!![],await mindarThree[_0x4d654c(0x1a6)](),containerMind[_0x4d654c(0x1f2)][_0x4d654c(0x192)]=_0x4d654c(0x188),containerThree[_0x4d654c(0x1f2)][_0x4d654c(0x192)]='block',mindarThree[_0x4d654c(0x1a6)](),renderer[_0x4d654c(0x1fa)](()=>{const _0xe08d36=_0x4d654c;if(mixer)mixer[_0xe08d36(0x1b0)](clock[_0xe08d36(0x1ed)]());rendererThree[_0xe08d36(0x18c)](sceneThree,cameraThree);}),sceneThree['add'](sceneGroup),sceneThree[_0x4d654c(0x1b5)](objectGroup),objectGroup[_0x4d654c(0x16e)]['set'](0x0,0x0,0x0),objectGroup[_0x4d654c(0x17c)][_0x4d654c(0x178)](0x1f4,0x1f4,0x1f4),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[_0x4d654c(0x1c4)](navigator[_0x4d654c(0x200)])&&navigator[_0x4d654c(0x177)]>0x1?(window['removeEventListener'](_0x4d654c(0x1f6),TouchDownEvent,!![]),window['removeEventListener'](_0x4d654c(0x196),TouchUpEvent,!![]),window[_0x4d654c(0x193)](_0x4d654c(0x1d0),TouchMoveEvent,!![])):(window[_0x4d654c(0x193)](_0x4d654c(0x1e2),MouseDownEvent,!![]),window[_0x4d654c(0x193)](_0x4d654c(0x1eb),MouseUpEvent,!![]),window[_0x4d654c(0x193)]('mousemove',MouseMoveEvent,!![])),gtag(_0x4d654c(0x1b3),_0x4d654c(0x199),{'screen_name':_0x4d654c(0x1dd),'screen_class':titleProject});};function initFire(_0x310259,_0x4712a9,_0x598d83){var _0x4091fd=[];function _0x24c3e1(_0x478cb2){const _0x4341be=_0x37e1;let _0x48cf3f=new _0x3301cc[(_0x4341be(0x1a2))](_0x310259,0x20,0x20);_0x48cf3f[_0x4341be(0x1f5)](0x0,0.5,0x0);let _0x4bfd7c=getFlameMaterial(!![]);_0x4091fd[_0x4341be(0x1c9)](_0x4bfd7c);let _0x18d758=new _0x3301cc[(_0x4341be(0x175))](_0x48cf3f,_0x4bfd7c);_0x18d758[_0x4341be(0x16e)]['set'](_0x4712a9['x'],_0x4712a9['y'],_0x4712a9['z']),_0x18d758[_0x4341be(0x17a)]['y']=_0x598d83,objectGroup[_0x4341be(0x1b5)](_0x18d758);}_0x24c3e1(![]),_0x24c3e1(!![]);}function initText3D(_0x395f06,_0x5b0936,_0x48c4d6,_0x134392,_0x310971,_0x464fb4,_0xc3fd7e,_0x230266){const _0xf88c96=_0x493d40,_0x1aff0b=new FontLoader();_0x1aff0b[_0xf88c96(0x197)](_0xf88c96(0x169)+_0x230266+_0xf88c96(0x1be),function(_0x3b10c5){const _0x3c74d6=_0xf88c96,_0x5b6372=new TextGeometry(_0x395f06,{'font':_0x3b10c5,'size':_0x134392,'height':_0x310971});_0x5b6372[_0x3c74d6(0x170)]();const _0x3230b8=-0.5*(_0x5b6372['boundingBox'][_0x3c74d6(0x1b6)]['x']-_0x5b6372[_0x3c74d6(0x19d)][_0x3c74d6(0x184)]['x']),_0x2f7ee7=new _0x3301cc['Mesh'](_0x5b6372,[new _0x3301cc['MeshPhongMaterial']({'color':_0x464fb4}),new _0x3301cc[(_0x3c74d6(0x1d7))]({'color':_0xc3fd7e})]);_0x2f7ee7[_0x3c74d6(0x1d5)]=!![],_0x2f7ee7[_0x3c74d6(0x16e)]['y']=_0x5b0936['y'],_0x2f7ee7['position']['z']=_0x5b0936['z'],_0x2f7ee7[_0x3c74d6(0x16e)]['x']=_0x3230b8+_0x5b0936['x'],_0x2f7ee7[_0x3c74d6(0x17a)]['y']=_0x48c4d6['y'],_0x2f7ee7[_0x3c74d6(0x17a)]['z']=_0x48c4d6['z'],_0x2f7ee7[_0x3c74d6(0x17a)]['x']=_0x48c4d6['x'],objectGroup['add'](_0x2f7ee7);});}function getFlameMaterial(_0x18bc18){const _0x378c36=_0x493d40;let _0x1f6081=_0x18bc18?_0x3301cc[_0x378c36(0x1c1)]:_0x3301cc[_0x378c36(0x1f7)];return new _0x3301cc[(_0x378c36(0x1c7))]({'uniforms':{'time':{'value':0x0}},'vertexShader':_0x378c36(0x1ce),'fragmentShader':_0x378c36(0x16a),'transparent':!![],'side':_0x1f6081});}function LoadFBX(_0x15f5c9,_0x2bc0fd,_0x5c19c5){const _0x23ec33=_0x493d40;_0x15f5c9[_0x23ec33(0x197)](_0x2bc0fd,function(_0x16adc5){const _0x42daed=_0x23ec33;if(_0x16adc5['animations'][_0x42daed(0x1fc)]>0x0){mixer=new _0x3301cc['AnimationMixer'](_0x16adc5);const _0x250c3a=mixer[_0x42daed(0x17b)](_0x16adc5['animations'][0x0]);_0x250c3a['play']();}_0x16adc5['traverse'](function(_0x28d640){const _0x29427d=_0x42daed;_0x28d640[_0x29427d(0x1c8)]&&(_0x28d640['castShadow']=!![],_0x28d640[_0x29427d(0x171)]=!![]);}),_0x16adc5['scale'][_0x42daed(0x178)](0.005,0.005,0.005),_0x5c19c5[_0x42daed(0x1b5)](_0x16adc5);});}function initMarkedObject(){const _0x4ca907=_0x493d40,_0x4ef823=new _0x3301cc[(_0x4ca907(0x1b8))]()[_0x4ca907(0x197)](_0x4ca907(0x1ac)),_0x5e1238=new _0x3301cc[(_0x4ca907(0x1fd))]({'map':_0x4ef823}),_0x36b872=new _0x3301cc['PlaneGeometry'](0x1,0x1),_0x5af277=new _0x3301cc['Mesh'](_0x36b872,_0x5e1238);_0x5af277['scale'][_0x4ca907(0x178)](0x1,0x1,0x1),markedObject[_0x4ca907(0x1b5)](_0x5af277);}function LoadGLB(_0x2e0d91,_0x1e2557,_0x20d22a,_0x3e4555,_0x2c29ca,_0x61f25d,_0x51c096,_0x3541be,_0x269bfe){const _0x20eec8=_0x493d40;_0x2e0d91[_0x20eec8(0x197)](_0x1e2557,function(_0x2bdd94){const _0xb9f668=_0x20eec8;if(_0x2bdd94[_0xb9f668(0x1bd)][_0xb9f668(0x1fc)]>0x0){mixer=new _0x3301cc['AnimationMixer'](_0x2bdd94[_0xb9f668(0x16b)]);const _0x3eb726=mixer[_0xb9f668(0x17b)](_0x2bdd94[_0xb9f668(0x1bd)][0x0]);_0x3eb726[_0xb9f668(0x17e)]();}let _0x542083=_0x2bdd94['scene'];_0x542083[_0xb9f668(0x1e9)](_0x297fad=>{const _0x31d2f6=_0xb9f668;if(_0x297fad['isMesh']){let _0x9d664a=new _0x3301cc['MeshBasicMaterial']();_0x9d664a[_0x31d2f6(0x190)]=!![],_0x9d664a[_0x31d2f6(0x19e)]=THREEMindJs[_0x31d2f6(0x1fb)],_0x297fad['material']['map']&&(_0x9d664a[_0x31d2f6(0x195)]=_0x297fad['material']['map'],_0x297fad['material']=_0x9d664a);}}),_0x2bdd94[_0xb9f668(0x16b)][_0xb9f668(0x17c)][_0xb9f668(0x178)](_0x51c096,_0x3541be,_0x269bfe),_0x2bdd94[_0xb9f668(0x16b)][_0xb9f668(0x16e)][_0xb9f668(0x178)](_0x3e4555,_0x2c29ca,_0x61f25d),_0x20d22a[_0xb9f668(0x1b5)](_0x2bdd94['scene']);});}function InitLighting(){const _0x4f228b=_0x493d40,_0x25a699=new _0x3301cc[(_0x4f228b(0x202))](0xffffff,0.5);sceneGroup[_0x4f228b(0x1b5)](_0x25a699);const _0x284ce1=new _0x3301cc[(_0x4f228b(0x1a1))](0xffffff,0x1);_0x284ce1[_0x4f228b(0x16e)][_0x4f228b(0x178)](0x1,0x0,0x0),sceneGroup[_0x4f228b(0x1b5)](_0x284ce1);const _0x118278=new _0x3301cc['DirectionalLight'](0xffffff,0x1);_0x118278[_0x4f228b(0x16e)][_0x4f228b(0x178)](-0x1,0x0,0x0),_0x118278[_0x4f228b(0x1d5)]=!![],sceneGroup['add'](_0x118278);}function initAR(){const _0x540b48=_0x493d40;containerThree=document[_0x540b48(0x1ee)](_0x540b48(0x18e)),document[_0x540b48(0x1a7)]['appendChild'](containerThree),cameraThree=new _0x3301cc['PerspectiveCamera'](0x3c,window[_0x540b48(0x1a5)]/window[_0x540b48(0x1a9)],0.1,0x2710);let _0xfc3ade=window[_0x540b48(0x1a9)]/window[_0x540b48(0x1a5)];_0xfc3ade<0x1&&(_0xfc3ade=0x1);cameraThree[_0x540b48(0x16e)][_0x540b48(0x178)](0x64*_0xfc3ade,0x12c*_0xfc3ade,0x1f4*_0xfc3ade),sceneThree=new _0x3301cc[(_0x540b48(0x191))](),sceneThree[_0x540b48(0x180)]=null,rendererThree=new _0x3301cc[(_0x540b48(0x1c0))]({'antialias':![],'alpha':!![]}),rendererThree[_0x540b48(0x1ad)](window['devicePixelRatio']),rendererThree['setSize'](window[_0x540b48(0x1a5)],window[_0x540b48(0x1a9)]),rendererThree['shadowMap'][_0x540b48(0x1c6)]=!![],rendererThree[_0x540b48(0x1f0)]=_0x3301cc[_0x540b48(0x1b7)],rendererThree[_0x540b48(0x1fe)](0x0,0x0),containerThree[_0x540b48(0x18b)](rendererThree[_0x540b48(0x1d1)]);const _0x5a31ed=new _0x3301cc[(_0x540b48(0x1e4))](rendererThree);sceneThree[_0x540b48(0x17d)]=_0x5a31ed[_0x540b48(0x181)](new RoomEnvironment(),0.04)[_0x540b48(0x1e8)],controls=new OrbitControls(cameraThree,rendererThree[_0x540b48(0x1d1)]),controls['target'][_0x540b48(0x178)](0x0,0x46,0x0),sceneThree[_0x540b48(0x173)](0.3),controls[_0x540b48(0x1b0)]();}function initVideoObject(_0xa2626f){const _0x10ca7a=_0x493d40;videoObject=document[_0x10ca7a(0x1ee)]('video'),videoObject[_0x10ca7a(0x1d3)]=_0x10ca7a(0x1b9),videoObject['src']=_0xa2626f,videoObject[_0x10ca7a(0x1bf)]=!![],videoObject['loop']=!![],videoObject[_0x10ca7a(0x197)](),textureVideo=new _0x3301cc[(_0x10ca7a(0x1e3))](videoObject),textureVideo[_0x10ca7a(0x1bc)]=0.1,textureVideo[_0x10ca7a(0x183)]=_0x3301cc[_0x10ca7a(0x1f4)],textureVideo[_0x10ca7a(0x1cf)]=_0x3301cc[_0x10ca7a(0x1f4)],textureVideo['format']=_0x3301cc[_0x10ca7a(0x1ca)];const _0x1704c8=new _0x3301cc['ShaderMaterial']({'transparent':!![],'uniforms':{'map':{'value':textureVideo},'keyColor':{'value':[0x0,0x1,0x0]},'similarity':{'value':0x1-0.6},'smoothness':{'value':0x1}},'vertexShader':_0x10ca7a(0x1ae),'fragmentShader':_0x10ca7a(0x1d6),'side':_0x3301cc['DoubleSide']}),_0x176c82=new _0x3301cc[(_0x10ca7a(0x1fd))]({'map':textureVideo}),_0x415af3=new _0x3301cc[(_0x10ca7a(0x1ea))](0x1,0x1,0x1);videoMesh=new _0x3301cc[(_0x10ca7a(0x175))](_0x415af3,_0x1704c8),videoMesh[_0x10ca7a(0x17c)]['set'](0x4,2.35,0x1),videoMesh[_0x10ca7a(0x1bb)][_0x10ca7a(0x1ef)]=!![],objectGroup[_0x10ca7a(0x1b5)](videoMesh);}function init3D(){const _0x15cfda=_0x493d40;containerThree=document[_0x15cfda(0x1ee)](_0x15cfda(0x18e)),document[_0x15cfda(0x1a7)][_0x15cfda(0x18b)](containerThree),cameraThree=new _0x3301cc[(_0x15cfda(0x198))](0x3c,window[_0x15cfda(0x1a5)]/window[_0x15cfda(0x1a9)],0.1,0x2710);let _0x193d75=window[_0x15cfda(0x1a9)]/window[_0x15cfda(0x1a5)];_0x193d75<0x1&&(_0x193d75=0x1);cameraThree[_0x15cfda(0x16e)]['set'](0x64*_0x193d75,0x12c*_0x193d75,0x1f4*_0x193d75),sceneThree=new _0x3301cc[(_0x15cfda(0x191))](),sceneThree['background']=null,rendererThree=new _0x3301cc[(_0x15cfda(0x1c0))]({'antialias':!![],'alpha':!![]}),rendererThree[_0x15cfda(0x1ad)](window[_0x15cfda(0x1b2)]),rendererThree[_0x15cfda(0x1e6)](window[_0x15cfda(0x1a5)],window[_0x15cfda(0x1a9)]),rendererThree[_0x15cfda(0x1a8)][_0x15cfda(0x1c6)]=!![],rendererThree[_0x15cfda(0x1f0)]=_0x3301cc['sRGBEncoding'],rendererThree[_0x15cfda(0x1fe)](0x0,0x0),containerThree[_0x15cfda(0x18b)](rendererThree[_0x15cfda(0x1d1)]);const _0x34524c=new _0x3301cc['PMREMGenerator'](rendererThree);sceneThree[_0x15cfda(0x17d)]=_0x34524c[_0x15cfda(0x181)](new RoomEnvironment(),0.04)[_0x15cfda(0x1e8)],controls=new OrbitControls(cameraThree,rendererThree[_0x15cfda(0x1d1)]),controls[_0x15cfda(0x1b1)][_0x15cfda(0x178)](0x0,0x46,0x0),sceneThree[_0x15cfda(0x173)](0.3),controls[_0x15cfda(0x1b0)]();}function rotateObject(){const _0x282310=_0x493d40;console[_0x282310(0x18d)]('rotate\x20'+deltaX),objectGroup&&!is3D&&(objectGroup[_0x282310(0x17a)]['y']+=deltaX/0x64);}function TouchDownEvent(_0x55c88a){const _0x2c2483=_0x493d40;_0x55c88a['preventDefault'](),touchDown=!![],touchX=_0x55c88a[_0x2c2483(0x1e7)][0x0][_0x2c2483(0x164)],touchY=_0x55c88a[_0x2c2483(0x1e7)][0x0][_0x2c2483(0x16d)];}function TouchUpEvent(_0x28d5c4){const _0x57477b=_0x493d40;_0x28d5c4[_0x57477b(0x187)](),touchDown=![];}function TouchMoveEvent(_0x3d3639){const _0x1026b5=_0x493d40;_0x3d3639['preventDefault']();if(!touchDown)return;deltaX=_0x3d3639[_0x1026b5(0x1e7)][0x0][_0x1026b5(0x164)]-touchX,deltaY=_0x3d3639[_0x1026b5(0x1e7)][0x0][_0x1026b5(0x16d)]-touchY,touchX=_0x3d3639['touches'][0x0]['clientX'],touchY=_0x3d3639[_0x1026b5(0x1e7)][0x0][_0x1026b5(0x16d)],rotateObject();}function MouseDownEvent(_0x27cd27){const _0x360bb9=_0x493d40;_0x27cd27[_0x360bb9(0x187)](),touchDown=!![],touchX=_0x27cd27[_0x360bb9(0x1c5)],touchY=_0x27cd27[_0x360bb9(0x1d2)];}function MouseUpEvent(_0x387875){const _0x4074ee=_0x493d40;_0x387875[_0x4074ee(0x187)](),touchDown=![];}function MouseMoveEvent(_0x24f5b8){const _0x2cb1ac=_0x493d40;_0x24f5b8[_0x2cb1ac(0x187)]();if(!touchDown)return;deltaX=_0x24f5b8[_0x2cb1ac(0x1c5)]-touchX,deltaY=_0x24f5b8[_0x2cb1ac(0x1d2)]-touchY,touchX=_0x24f5b8[_0x2cb1ac(0x1c5)],touchY=_0x24f5b8[_0x2cb1ac(0x1d2)],rotateObject();}$(_0x493d40(0x201))['on'](_0x493d40(0x1a4),function(){const _0x14866a=_0x493d40;$(this)['is'](_0x14866a(0x167))?start():stop();}),start();