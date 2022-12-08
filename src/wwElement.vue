<!-- Copyright SNDQ 2022 -->

<template>
    <div id="previewwrapper" :class="{ editing: isEditing }" :style="richTextStyle">
        <div id="canvaswrapper">
            <canvas id="thecanvas" style="width:100%"></canvas>
            <div id="nofile" v-if="content.fileurl == ''">{{ content.NoFileText }}</div>
        </div>
        <div id="menuwrapper">
            <div id="pdf_menu">
                
                <div class="btnitem" v-if="HideDeleteIcon">
                <svg id="trash" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12V8C7 7.44772 6.55228 7 6 7C5.44772 7 5 7.44772 5 8V12C5 12.5523 5.44772 13 6 13C6.55228 13 7 12.5523 7 12Z" fill="#FD5754"/>
                <path d="M11 12V8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12Z" fill="#FD5754"/>
                <path d="M12 1C12 0.4 11.6 0 11 0H5C4.4 0 4 0.4 4 1V3H1C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5V15C1 15.6 1.4 16 2 16H14C14.6 16 15 15.6 15 15V5C15.5523 5 16 4.55228 16 4C16 3.44772 15.5523 3 15 3H12V1ZM6 2H10V3H6V2ZM13 5V14H3V5H13Z" fill="#FD5754"/>
                </svg>
                </div>
        
                <div class="btnitem">
                <svg id="zoominbutton" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M10 7C10 7.55228 9.55228 8 9 8H8V9C8 9.55228 7.55228 10 7 10C6.44772 10 6 9.55228 6 9V8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H6V5C6 4.44772 6.44772 4 7 4C7.55228 4 8 4.44772 8 5V6H9C9.55228 6 10 6.44772 10 7Z" fill="#11253E"/>
                <path d="M7 14C3.14 14 0 10.86 0 7C0 3.14 3.14 0 7 0C10.86 0 14 3.14 14 7C14 10.86 10.86 14 7 14ZM7 2C4.243 2 2 4.243 2 7C2 9.757 4.243 12 7 12C9.757 12 12 9.757 12 7C12 4.243 9.757 2 7 2Z" fill="#11253E"/>
                <path d="M15.707 14.293L13.314 11.9C12.903 12.429 12.429 12.903 11.9 13.314L14.293 15.707C14.488 15.902 14.744 16 15 16C15.256 16 15.512 15.902 15.707 15.707C16.098 15.316 16.098 14.684 15.707 14.293Z" fill="#11253E"/>
                </g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white"/></clipPath></defs>
                </svg>
                </div>

                <div class="btnitem">
                <svg id="zoomoutbutton" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M4 7C4 6.44772 4.44772 6 5 6H9C9.55228 6 10 6.44772 10 7C10 7.55228 9.55228 8 9 8H5C4.44772 8 4 7.55228 4 7Z" fill="#11253E"/>
                <path d="M7 14C3.14 14 0 10.86 0 7C0 3.14 3.14 0 7 0C10.86 0 14 3.14 14 7C14 10.86 10.86 14 7 14ZM7 2C4.243 2 2 4.243 2 7C2 9.757 4.243 12 7 12C9.757 12 12 9.757 12 7C12 4.243 9.757 2 7 2Z" fill="#11253E"/>
                <path d="M15.707 14.293L13.314 11.9C12.903 12.429 12.429 12.903 11.9 13.314L14.293 15.707C14.488 15.902 14.744 16 15 16C15.256 16 15.512 15.902 15.707 15.707C16.098 15.316 16.098 14.684 15.707 14.293Z" fill="#11253E"/>
                </g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white"/></clipPath></defs>
                </svg>
                </div>


                <div id="grouparrows" v-if="content.ShowFileNav">
                <span class="multipages">
                    <div class="btnitem">
                    <svg id="prev" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 3.5L5 8L9.5 12.5" stroke="#11253E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>

                    <span id="page_num"></span><span> / </span><span id="page_count"></span>
                    
                    <div class="btnitem">
                    <svg id="next" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 3.5L11 8L6.5 12.5" stroke="#11253E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                </span>
                </div>

                
                <div class="btnitem">
                <a v-bind:href="content.fileurl" download target="_blank"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99998 12C8.29998 12 8.49998 11.9 8.69998 11.7L13.7 6.7C14.0866 6.3134 14.0866 5.6866 13.7 5.3C13.3134 4.9134 12.6866 4.9134 12.3 5.3L8.99998 8.6V1C8.99998 0.447715 8.55226 0 7.99998 0C7.44769 0 6.99998 0.447715 6.99998 1V8.6L3.69998 5.3C3.31338 4.9134 2.68657 4.9134 2.29998 5.3C1.91338 5.6866 1.91338 6.3134 2.29998 6.7L7.29998 11.7C7.49998 11.9 7.69998 12 7.99998 12Z" fill="#11253E"/>
                <path d="M14 14H2C1.44772 14 1 14.4477 1 15C1 15.5523 1.44772 16 2 16H14C14.5523 16 15 15.5523 15 15C15 14.4477 14.5523 14 14 14Z" fill="#11253E"/>
                </svg>
                </a>
                </div>
                
                <div class="btnitem">
                <svg id="resetscale" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 9C12.4477 9 12.0128 9.4547 11.8761 9.9898C11.4345 11.7182 9.86407 13 8 13C5.79443 13 4 11.2056 4 9C4 6.79443 5.79443 5 8 5V5.91937C8 6.75788 8.96993 7.22405 9.62469 6.70024L12.0239 4.78087C12.5243 4.38054 12.5243 3.61946 12.0239 3.21913L9.6247 1.29976C8.96993 0.775946 8 1.24212 8 2.08062V3C4.69141 3 2 5.69141 2 9C2 12.3086 4.69141 15 8 15C10.9694 15 13.4417 12.8321 13.9174 9.99577C14.0087 9.45109 13.5523 9 13 9Z" fill="#11253E"/>
                </svg>
                </div>
        
            </div>

        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js");
const workerSrc = require('pdfjs-dist/build/pdf.worker.js')

export default {
    inheritAttrs: false,
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwFrontState: { type: Object, required: true },
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
        uid: { type: String, required: true },
        wwElementState: { type: Object, required: true },
    },
    emits: ['trigger-event', 'add-state', 'remove-state', 'update:content:effect'],
    setup(props) {
        return { };
    },
    data() {
        return { };
    },
    computed: {
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
        richTextStyle() {
            var heightparent = "";
            if(this.content.FullHeightOfParent == true){
                heightparent = "100%";
            }else{
                heightparent = this.content.height + "px";
            }
            var widthparent = "";
            if(this.content.FullWidthOfParent == true){
                widthparent = "100%";
            }else{
                widthparent = this.content.width + "px";
            }
            var canvasheight = "";
            if(this.content.FullHeightOfParent == true){
                canvasheight = "calc(100vh - 260px)";
            }else{
                canvasheight = "-webkit-fill-available";
            }
            var overflowx = "";
            if(this.content.OverflowY == "scroll"){
                overflowx = "auto";
            }else if(this.content.OverflowY == "cut"){
                overflowx = "clip";
            }
            var MenuPadding = "";
            if(this.content.MenuPadding != ""){
                MenuPadding = this.content.MenuPadding + "px";
            }else{MenuPadding = "auto";}
            return {
                '--FullHeightOfParent': heightparent,
                '--FullWidthOfParent': widthparent,
                '--canvasheight': canvasheight,
                '--overflowx': overflowx,
                '--menupadding':MenuPadding
            };
        },
    },
    watch: {
        'content.fileurl'(newValue) {
            // console.log("new value: "+newValue)
            newValue = parseFloat(newValue);
            if (isNaN(newValue)) newValue = 0;
            if (newValue === this.value) return;
            this.$emit("trigger-event", { name: "initValueChange", event: { value: newValue } });
            this.handleObserver();
        }
    },
    beforeUnmount() {
    },
    mounted() {
        this.isMounted = true;
        this.handleObserver();
    },
    methods: {
        handleObserver() {
            if (!this.isMounted) return;

            function get_url_extension(url) {
            	if (typeof(url) === 'string') {
                    return url.split(/[#?]/)[0].split('.').pop().trim();
                }else{
                    return "";
                }
            }

            var that = this;
            function renderPage(num) {
                if(that.content.FullWidthOfParent == true){
                    var parent = document.getElementById('previewwrapper');
                    var desiredWidth = parent.parentElement.clientWidth - 40;
                }else{
                    var desiredWidth = that.content.width - 17;
                }
            
                pageRendering = true;
                var scale = pdfScale;
                // Using promise to fetch the page
                pdfDoc.getPage(num).then(function(page){
                    if(pdfScale == 1){ 
                    var viewport = page.getViewport({ scale: 1, });
                    var scale = desiredWidth / viewport.width;
                    var scaledViewport = page.getViewport({ scale: scale });
                    }else{
                    var viewport = page.getViewport({ scale: 1, });
                    var scale = (desiredWidth / viewport.width)*pdfScale;
                    var scaledViewport = page.getViewport({ scale: scale });
                    }
                    canvas.height = scaledViewport.height;
                    canvas.width = scaledViewport.width;
                    //document.getElementById('previewwrapper').style.height = (canvas.height/2+200) +'px';
                    if(that.content.OverflowY == "grow"){
                        if (pdfScale > 1) {document.getElementById('previewwrapper').style.width = (canvas.width/2+17) +'px';}
                        else
                        {document.getElementById('previewwrapper').style.width = that.content.width/2+'px';}
                    }
                    
                    var renderContext = {
                    canvasContext: ctx,
                    viewport: scaledViewport
                    };
                    var renderTask = page.render(renderContext);
                
                    renderTask.promise.then(function() {
                    pageRendering = false;
                    if(pageNumPending !== null){
                        // New page rendering is pending
                        renderPage(pageNumPending);
                        pageNumPending = null;
                    }
                    });
                });
            
                if(document.getElementById('page_num')){
                    document.getElementById('page_num').textContent = num;
                }
            }
            
            function queueRenderPage(num) {
                if (pageRendering) {
                    pageNumPending = num;
                } else {
                    renderPage(num);
                }
            }
            
            /**
             * functions related to navigation and zoom
             */
            function onPrevPage() {
                if (pageNum <= 1) {
                    return;
                }
                pageNum--;
                queueRenderPage(pageNum);
            }

            var thaturl = this.content.fileurl;
            var filetype = get_url_extension(thaturl) || "";
            // console.log("filetype="+filetype);
            if(filetype == "pdf" && thaturl != ""){

                var url = this.content.fileurl;
                var pdfcanvas = document.querySelector('thecanvas');

                //var pdfjsLib = window['pdfjs-dist/build/pdf'];
                //pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;
                pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

                var pdfDoc = null,
                pdfScale = 2,
                pageNum = 1,
                pageRendering = false,
                pageNumPending = null,
                canvas = document.getElementById('thecanvas'),
                ctx = canvas.getContext('2d');
                
                if(document.getElementById('prev')){
                    document.getElementById('prev').addEventListener('click', onPrevPage);
                }
                function onNextPage() {
                    if (pageNum >= pdfDoc.numPages) {
                        return;
                    }
                    pageNum++;
                    queueRenderPage(pageNum);
                }
                if(document.getElementById('next')){
                    document.getElementById('next').addEventListener('click', onNextPage);
                }
            }

            //----
            // Regular bottom button actions
            // min: 10% and max: 500% and step: 10%
            var minAllowedZoomScale = this.content.minAllowedZoomScale/100;
            var maxAllowedZoomScale = this.content.maxAllowedZoomScale/100;
            var stepZoomScale = this.content.stepZoomScale/100;

            var zoominbutton = document.getElementById('zoominbutton');
            zoominbutton.addEventListener("click", actionzoomin, false);
            
            function actionzoomin() {
                pdfScale = pdfScale + 0.20;
                if(filetype == "pdf"){
                    var currcanvasw = document.getElementById("thecanvas").clientWidth;
                    document.getElementById("thecanvas").style.width = (currcanvasw * 1.2) + "px";
                    queueRenderPage(pageNum);
                }else{
                    var GFG = document.getElementById("previewimage");
                    var currHeight = GFG.clientHeight;
                    // GFG.style.height = (currHeight + 40) + "px";
                    var num = parseFloat(GFG.getAttribute('data-zoom'));
                    var poscalc = (num+parseFloat(stepZoomScale));
                    if(poscalc > parseFloat(maxAllowedZoomScale)){
                        poscalc = parseFloat(maxAllowedZoomScale);
                    }
                    // console.log("A de zoom value: " + poscalc);
                    GFG.style.transform = "scale("+poscalc+")";
                    GFG.setAttribute('data-zoom', poscalc);
                }
            };

            var zoomoutbutton = document.getElementById('zoomoutbutton');
            zoomoutbutton.addEventListener("click", actionzoomout, false);

            function actionzoomout(){
                if(filetype == "pdf"){
                    var currcanvasw = document.getElementById("thecanvas").clientWidth;
                    document.getElementById("thecanvas").style.width = (currcanvasw / 1.2) + "px";
                    if(pdfScale <= 0.25){return;}
                    pdfScale = pdfScale - 0.20;
                    queueRenderPage(pageNum);
                }else{
                    pdfScale = pdfScale - 0.20;
                    var GFG = document.getElementById("previewimage");
                    var currHeight = GFG.clientHeight;
                    // GFG.style.height = (currHeight - 40) + "px";
                    var num = parseFloat(GFG.getAttribute('data-zoom'));
                    var negcalc = (num - parseFloat(stepZoomScale));
                    if(negcalc <= parseFloat(minAllowedZoomScale)){
                        negcalc = parseFloat(minAllowedZoomScale);
                    }
                    // console.log("B de zoom value: " + negcalc);
                    GFG.style.transform = "scale("+negcalc+")";
                    GFG.setAttribute('data-zoom', negcalc);
                }
            };

            var resetscalebutton = document.getElementById('resetscale');
            resetscalebutton.addEventListener("click", actionzoomreset, false);
            
            function actionzoomreset(){
                if(filetype == "pdf"){
                    document.getElementById("thecanvas").style.width = '100%';
                    pdfScale = 2;
                    queueRenderPage(pageNum);
                }else{
                    var targ = document.getElementById("previewimage");
                    targ.style.top = 0;
                    targ.style.left = 0;
                    targ.style.height = "100%";
                    targ.setAttribute('data-zoom', '1');
                    targ.style.transform = "scale(1)";
                }
            };
            //----

            if(filetype == "pdf" && thaturl != ""){
                var thatcanvas = document.getElementById("thecanvas");
                if(thatcanvas){
                    thatcanvas.style.display = "block";
                }

                // if there is a figure node, remove it first
                var cvswrap = document.getElementById("canvaswrapper");
                if(cvswrap){
                    var firstfig = cvswrap.getElementsByTagName("figure")[0];
                    if(firstfig){
                        firstfig.parentNode.removeChild(firstfig);
                    }
                }

                // the initial pdf load
                pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
                pdfDoc = pdfDoc_;
                if(document.getElementById('page_count')){
                    document.getElementById('page_count').textContent = pdfDoc.numPages;
                }

                if(pdfDoc.numPages == 1){
                    document.getElementsByClassName('multipages').style.display = 'none';
                }
                
                renderPage(pageNum);
                });

                // add minimum height to get fixed box size
                document.getElementById("canvaswrapper").style.minHeight = "450px";
            }else if(thaturl != ""){
                // only code for the image to add in the canvas
                var thatcanvas = document.getElementById("thecanvas");
                if(thatcanvas){
                    thatcanvas.style.display = "none";
                }
                //var grouparrows = document.getElementById("grouparrows");
                //if(grouparrows){
                //	grouparrows.style.display = "none";
                //}
                
                // the initial image load
                var cvswrap = document.getElementById("canvaswrapper");
                if(cvswrap){
                    // if there is a fig, remove it first
                    var firstfig = cvswrap.getElementsByClassName("fig")[0];
                    if(firstfig){
                        firstfig.parentNode.removeChild(firstfig);
                    }
                    var newfig = document.createElement("figure");
                    newfig.className = "fig";
                    cvswrap.appendChild(newfig);

                    var newimg = new Image();
                    newimg.id = "previewimage";
                    newimg.className = "dragme";
                    newimg.src = thaturl;
                    newimg.setAttribute('data-zoom', '1');
                    newimg.addEventListener("dblclick", imagezoomin);  
                    newfig.appendChild(newimg); 
                }
            }

            function imagezoomin(){
                actionzoomin();
            }

            // Image drag function
            var offsetX;
            var offsetY;
            var coordX;
            var coordY;
            var drag;
            function startDrag(e){
                if(!e){var e = window.event;}
                //var targ = e.target ? e.target : e.srcElement;
                var targ = document.getElementById("previewimage");
                if(targ){
                    if(targ.className !== 'dragme'){return}
                    offsetX = e.clientX;
                    offsetY = e.clientY;
            
                    if(!targ.style.left){targ.style.left = '0px'}
                    if(!targ.style.top){targ.style.top = '0px'}
                    coordX = parseInt(targ.style.left);
                    coordY = parseInt(targ.style.top);
                    drag = true;
            
                    document.onmousemove = dragDiv;
                    return false;
                }
            }
            function dragDiv(e){
                if(!drag){return}
                if(!e){var e = window.event}
                //var targ = e.target ? e.target : e.srcElement;
                var targ = document.getElementById("previewimage");
                if(targ){
                    // move div element
                    targ.style.left = coordX + e.clientX - offsetX + 'px';
                    targ.style.top = coordY + e.clientY - offsetY + 'px';
                    return false;
                }
            }
            function stopDrag(){
                drag = false;
            }

            function addMoveImage(){
                document.onmousedown = startDrag;
                document.onmouseup = stopDrag;
            }
            addMoveImage();
            //---
        }
    }
};
</script>

<style module>
.fig{overflow:hidden;width:auto;height:inherit;position:relative;display:flex;justify-content:center;height:100%;margin:0;align-items:center}
.fig img{width:100%;height:100%;object-fit:contain;position:absolute;cursor:grab}
.fig img:active{cursor:grabbing}
</style>

<style scoped>
.dragme{position:relative;cursor:move}
#menuwrapper{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:16px}
#pdf_menu{bottom:10px;height:40px;width:fit-content;background-color:white;border-radius:4px;display:flex;flex-direction:row;align-items:center;padding:0px 8px;margin-right:auto;margin-left:auto;margin-top:15px;box-shadow:0px 0px 5px rgba(17, 37, 62, 0.1)}
#pdf_menu .btnitem{width:40px;height:40px;display:flex;align-items:center;justify-content:center}
#pdf_menu i, #pdf_menu svg{position:relative;font-size:24px;margin-left:var(--menupadding);margin-right:var(--menupadding);margin-top:auto;margin-bottom:auto;cursor:pointer}
#pdf_menu .multipages{display:flex;align-items:center;align-content:center;width:max-content;height:32px;padding:5px 0px 6px 0px;background-color:#F3F4F5;border-radius:32px}
#pdf_menu a{position:relative;font-size:24px;margin-left:0px;margin-right:0px;margin-top:auto;margin-bottom:auto;cursor:pointer}
#nofile{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:20px}
#the-canvas{border:1px solid black;direction:ltr}
#canvaswrapper{overflow-x:var(--overflowx);/*max-height: 450px;*/height:var(--canvasheight)}
#previewwrapper{position:relative;width:var(--FullWidthOfParent);min-height:300px;height:var(--FullHeightOfParent);border-radius:8px;background:#F9FAFB;
box-shadow:inset 0px 0px 5px rgba(17, 37, 62, 0.1);
padding-left:44px;padding-right:44px;padding-top:16px;padding-bottom:73px}
#previewwrapper canvas{margin-left:auto;margin-right:auto;padding:0;margin:auto;display:block;position:relative;top:0;bottom:0;left:0;right:0}
</style>