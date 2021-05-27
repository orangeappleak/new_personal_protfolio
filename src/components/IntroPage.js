import React,{useEffect} from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import '../stylesheets/IntroPage.css';
import checkIntersection from '../components/intersectionObserver';

export default function IntroPage(){
  return(
      <Parallax pages={1.4} id="parallax-intro" style={{position: 'relative',height: '100vh'}}>
        <ParallaxLayer id="background-image" offset={0} speed={2}>
          <img alt="cannot be displayed" src="https://images.unsplash.com/photo-1616244013240-227ec9abfefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"/>
        </ParallaxLayer>
        <ParallaxLayer id="intro-heading" offset={0} speed={3.5}>
            <h1>Bringing <span id="strip"> Designs to Life</span> since 2019.</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0.999} speed={1.5} id="intro-about">
          <div id="intro-about-headings">
            <ParallaxLayer offset={0} speed={0.7}>
              < SkillSet />
            </ParallaxLayer>
          </div>
        </ParallaxLayer>
      </Parallax>

    
  )
};

function SkillSet(){

  var skills=["Web Designer.","React Developer.","Programmer.","Tech Enthusiast."]

  useEffect(() => {
    checkIntersection();
  }, []);

  return(
    <div id="skill-set" class="intersect">
      <div id="skills">
        <h1>Hi I'm Karthik.</h1>
        {skills.map((skill,index) => (
          <h1 key={index}>{skill}</h1>
        ))}
      </div>
        <ParallaxLayer id="skill-set-image" style={{
          position: 'relative',display: 'flex',justifyContent: 'center',alignItems: 'center',
          top: '10%'
        }} speed={0.3}>
          <svg viewBox="0 0 1084 900" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="534.792" y="1056.29" width="1125.91" height="474.753" transform="rotate(-118.359 534.792 1056.29)" fill="#7EA8E4"/>
<rect x="250" y="253.149" width="951" height="401" transform="rotate(-34.0987 250 253.149)" fill="#B6D4FF"/>
<path d="M707.13 665.285L732.412 611.218" stroke="#CCE3FF" stroke-width="12"/>
<path d="M679.068 580.437L732.411 611.218" stroke="#CCE3FF" stroke-width="12"/>
<path d="M679.689 581.102H657.93" stroke="#CCE3FF" stroke-width="12"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M723.398 670.202H675.955C675.955 665.848 679.454 662.318 683.769 662.318H715.584C719.899 662.318 723.398 665.848 723.398 670.202Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M637.941 599.131C637.941 587.992 646.89 578.962 657.929 578.962C668.97 578.962 677.919 587.992 677.919 599.131" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M778.392 868.608H773.911L746.38 683.539H761.873L778.392 868.608Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M699.957 868.608H695.477L667.945 683.539H683.438L699.957 868.608Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M590.057 613.544H523.078L538.794 665.822H605.772L590.057 613.544Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M527.792 616.908L541.21 661.544H601.147L587.731 616.908H527.792Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M538.733 630.645L539.372 632.78H588.572L587.933 630.645H538.733Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M541.871 634.994L542.51 637.128H590.1L589.461 634.994H541.871Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M556.78 639.341L557.419 641.475H591.587L590.948 639.341H556.78Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M654.748 670.12H587.769V665.821H654.748V670.12Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M587.769 670.12H538.818V665.821H587.769V670.12Z" fill="#ECF6FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M523.133 613.544H519.017L534.733 665.822H538.849L523.133 613.544Z" fill="#ECF6FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M796.499 683.539H543.486V670.121H796.499V683.539Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M561.784 683.539H463.073V670.121H561.784V683.539Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M475.6 868.608H471.12L487.638 683.539H503.131L475.6 868.608Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M554.337 868.608H549.857L566.376 683.539H581.869L554.337 868.608Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M536.276 622.212L536.915 624.347H586.115L585.476 622.212H536.276Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M542.823 626.559L543.462 628.694H587.293L586.654 626.559H542.823Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M553.062 616.346L561.433 617.369L562.104 616.307L561.662 615.338L562.299 614.567L554.479 613.544L553.298 614.256L554.286 615.253L553.062 616.346Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M769.166 736.404V737.326C769.166 745.021 775.083 751.254 782.375 751.254H885.84C901.8 751.254 914.081 735.804 911.879 718.492L900.198 622.033C899.186 614.044 892.953 608.1 885.587 608.1H854.923C847.562 608.1 841.329 614.044 840.312 622.033L828.631 718.492C828.541 719.181 828.478 719.87 828.441 720.553L828.378 720.542C828.378 720.542 826.217 736.404 806.133 736.404H769.166Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M879.314 859.906C879.314 864.83 883.267 868.816 888.143 868.816C893.019 868.816 896.972 864.83 896.972 859.906C896.972 854.99 893.019 851.003 888.143 851.003C883.267 851.003 879.314 854.99 879.314 859.906Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M798.748 861.698H886.001C889.343 861.698 892.077 858.934 892.077 855.566C892.077 852.191 889.343 849.434 886.001 849.434H798.748C795.407 849.434 792.672 852.191 792.672 855.566C792.672 858.934 795.407 861.698 798.748 861.698Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M846.852 858.781H837.897V750.883H846.852V858.781Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M811.693 750.883L842.375 764.981L873.056 750.883H811.693Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M841.696 861.698H853.018C856.36 861.698 859.094 858.934 859.094 855.566C859.094 852.191 856.36 849.434 853.018 849.434H841.696C838.354 849.434 835.62 852.191 835.62 855.566C835.62 858.934 838.354 861.698 841.696 861.698Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M849.123 859.906C849.123 864.83 853.076 868.816 857.952 868.816C862.829 868.816 866.781 864.83 866.781 859.906C866.781 854.99 862.829 851.003 857.952 851.003C853.076 851.003 849.123 854.99 849.123 859.906Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M787.192 859.906C787.192 864.83 791.145 868.816 796.022 868.816C800.898 868.816 804.85 864.83 804.85 859.906C804.85 854.99 800.898 851.003 796.022 851.003C791.145 851.003 787.192 854.99 787.192 859.906Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M449.053 869.539H434.443V821.648H449.053V869.539Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M327.357 869.539H312.742V821.648H327.357V869.539Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M397.233 869.539H382.625V821.648H397.233V869.539Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M275.536 869.539H260.928V821.648H275.536V869.539Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M397.316 830.148H261.01V423.322H397.316V830.148Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M448.779 830.148H312.473V423.322H448.779V830.148Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M356.016 395.659C356.016 407.348 362.133 417.604 371.319 423.322H405.016C414.198 417.604 420.318 407.348 420.318 395.659C420.318 390.219 418.992 385.097 416.654 380.6H359.684C357.344 385.097 356.016 390.219 356.016 395.659Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M347.47 423.315H333.577V369.759H347.47V423.315Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M361.363 423.315H347.47V369.759H361.363V423.315Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M333.577 423.315H319.678V369.759H333.577V423.315Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M282.349 423.315H319.678V369.759H282.349C280.793 369.759 279.527 371.034 279.527 372.607V420.466C279.527 422.039 280.793 423.315 282.349 423.315Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M307.437 391.045H291.775V385.742H307.437V391.045Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M436.577 816.738H324.618V699.646H436.577V816.738Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M436.576 816.738H397.949V699.646H436.576V816.738Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M436.577 685.115H324.618V568.023H436.577V685.115Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M436.576 685.115H397.949V568.023H436.576V685.115Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M436.577 553.491H324.618V436.398H436.577V553.491Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M436.576 553.491H397.949V436.398H436.576V553.491Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M409.771 816.738H398.692V774.031H409.771V816.738Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M420.851 816.738H409.771V774.031H420.851V816.738Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M398.692 816.738H387.607V774.031H398.692V816.738Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M358.411 816.738H387.607V774.031H358.411C356.856 774.031 355.59 775.306 355.59 776.879V813.891C355.59 815.467 356.856 816.738 358.411 816.738Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M382.866 784.481H360.338V780.252H382.866V784.481Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M377.843 791.005H365.354V786.776H377.843V791.005Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M370.982 535.357C371.842 542.641 375.503 549.063 380.843 553.491H415.767C421.108 549.063 424.765 542.641 425.628 535.357H370.982Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M370.982 520.219C372.613 533.985 384.222 544.664 398.307 544.664C412.392 544.664 424.002 533.985 425.628 520.219H370.982Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M370.982 505.103C371.842 512.387 375.503 518.809 380.843 523.237H415.767C421.108 518.809 424.765 512.387 425.628 505.103H370.982Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M370.982 489.964C372.613 503.73 384.222 514.41 398.307 514.41C412.392 514.41 424.002 503.73 425.628 489.964H370.982Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M388.976 656.987C388.976 667.706 390.112 677.511 391.997 685.115H411.787C413.675 677.511 414.812 667.706 414.812 656.987" fill="#ECF6FF"/>
<path d="M389.953 661.697C385.467 662.591 382.549 666.987 383.437 671.515C384.325 676.043 388.68 678.989 393.167 678.095" stroke="#ECF6FF" stroke-width="8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M349.335 656.987C349.335 667.706 350.464 677.511 352.356 685.115H372.145C374.031 677.511 375.166 667.706 375.166 656.987" fill="#ECF6FF"/>
<path d="M354.599 661.697C350.112 662.591 347.195 666.987 348.083 671.515C348.963 676.043 353.319 678.989 357.812 678.095" stroke="#ECF6FF" stroke-width="8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M686.359 330.743H919.372V320.868H686.359V330.743Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M919.372 330.743H957.705V320.868H919.372V330.743Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M743.151 330.743L761.347 359.548V330.743H743.151Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M733.081 330.743L751.277 359.548H761.347L743.151 330.743H733.081Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M876.61 330.743L894.806 359.548V330.743H876.61Z" fill="#B6D4FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M866.54 330.743L884.737 359.548H894.806L876.61 330.743H866.54Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M602.221 259.163H516.034V186.071H602.221V259.163Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M602.221 259.163H516.034V186.071H602.221V259.163Z" stroke="#DCEEFF" stroke-width="5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M607.289 259.261H521.102V186.17H607.289V259.261Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M607.289 259.261H521.102V186.17H607.289V259.261Z" stroke="#DCEEFF" stroke-width="5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M592.61 244.161H537.01V201.074H592.61V244.161Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M585.775 329.639H533.399V268.019H585.775V329.639Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M585.775 329.639H533.399V268.019H585.775V329.639Z" stroke="#DCEEFF" stroke-width="5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M589.399 329.639H536.047V268.019H589.399V329.639Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M589.399 329.639H536.047V268.019H589.399V329.639Z" stroke="#DCEEFF" stroke-width="5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M576.771 313.605H551.134V283.941H576.771V313.605Z" fill="#CCE3FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M501.79 298.89H405.174V186.767H501.79V298.89Z" fill="#DCEEFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M501.79 298.89H405.174V186.767H501.79V298.89Z" stroke="#DCEEFF" stroke-width="9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M505.451 298.89H408.835V186.767H505.451V298.89Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M505.451 298.89H408.835V186.767H505.451V298.89Z" stroke="#DCEEFF" stroke-width="9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M485.066 275.4H430.594V210.256H485.066V275.4Z" fill="#CCE3FF"/>
<path d="M661.172 383.021L661.765 362.317C661.765 362.317 636.892 364.32 631.571 361.524C631.571 361.524 625.068 327.633 632.824 308.865L632.981 308.134L685.471 301.924L688.413 332.391C690.181 327.116 704.774 321.133 708.588 328.688C716.854 345.056 687.297 356.078 687.297 356.078L690.299 383.269" fill="#E576C6"/>
<path opacity="0.398926" fill-rule="evenodd" clip-rule="evenodd" d="M661.765 362.317L678.537 358.679L661.845 370.084L661.765 362.317Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M648.357 332.003L642.562 346.336L649.508 346.426L648.357 332.003Z" fill="#405FD3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M654.538 332.555C654.193 334.485 655.46 336.332 657.368 336.682C659.276 337.031 661.103 335.749 661.448 333.819C661.793 331.889 660.526 330.042 658.618 329.693C656.709 329.343 654.883 330.625 654.538 332.555Z" fill="#0D0B6D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M635.062 332.555C634.716 334.485 635.984 336.332 637.892 336.682C639.8 337.031 641.627 335.749 641.972 333.819C642.317 331.889 641.05 330.042 639.142 329.693C637.234 329.343 635.407 330.625 635.062 332.555Z" fill="#0D0B6D"/>
<path d="M684.515 337.591C689.492 328.975 696.693 326.347 699.925 325.577C701.213 321.808 702.196 317.438 702.887 312.789C704.738 300.349 695.795 288.998 688.572 285.739C681.261 282.44 668.653 277.869 650.199 284.074C637.793 288.248 629.862 278.254 622.562 282.522C610.087 289.818 621.691 321.758 653.323 313.644C675.951 307.84 676.532 309.296 676.726 313.515C677.354 327.153 679.456 335.175 684.515 337.591Z" fill="#2F2F3D"/>
<path d="M658.006 346.959C658.006 346.959 655.776 351.057 650.956 350.96" stroke="#252535" stroke-width="4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M650.04 332.727C650.04 337.214 653.637 340.851 658.074 340.851C662.509 340.851 666.106 337.214 666.106 332.727C666.106 328.24 662.509 324.602 658.074 324.602C653.637 324.602 650.04 328.24 650.04 332.727Z" stroke="#252535" stroke-width="4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M629.814 332.727C629.814 337.214 633.411 340.851 637.847 340.851C642.283 340.851 645.88 337.214 645.88 332.727C645.88 328.24 642.283 324.602 637.847 324.602C633.411 324.602 629.814 328.24 629.814 332.727Z" stroke="#252535" stroke-width="4"/>
<path d="M666.106 332.727H685.949" stroke="#252535" stroke-width="4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M640.516 848.359L640.321 831.379L661.998 820.351L665.144 868.887H590.041C602.82 854.352 640.516 848.359 640.516 848.359ZM736.719 849.018L736.524 829.948L750.656 841.567L762.028 847.963L765.782 868.887H714.379C720.842 851.109 736.719 849.018 736.719 849.018Z" fill="#0D0B6D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M736.524 829.948L758.201 823.365L762.029 847.963L736.719 849.018L736.524 829.948ZM640.321 831.379L661.998 824.795L663.746 847.303L640.516 848.359L640.321 831.379Z" fill="#E576C6"/>
<path d="M637.214 825.809L637.714 841.567H666.308L665.806 825.761C669.01 824.462 671.298 821.344 671.376 817.656L675.979 581.612L725.711 819.92C726.412 823.268 728.874 825.872 732 826.83L733.869 841.567H763.85L761.27 825.302C763.766 823.344 765.214 820.129 764.716 816.698L718.93 500.852H677.554L677.556 500.732H627.442L630.446 817.212C630.487 821.379 633.354 824.858 637.214 825.809Z" fill="#2F2F3D"/>
<path d="M708.224 501.15L703.422 501.941L755.794 823.809L760.611 822.997L708.224 501.15Z" fill="#EFEFEF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M558.608 392.588L558.952 386.595C558.952 386.595 558.945 382.426 558.408 377.924C558.273 376.795 557.978 375.614 557.662 374.352C556.719 370.586 555.597 366.106 558.05 360.153C561.326 352.214 553.495 357.696 551.761 361.472C551.091 362.931 550.896 365.138 550.702 367.326C550.479 369.857 550.257 372.364 549.305 373.664C547.805 372.843 546.807 371.773 546.807 371.773L529.928 349.804C529.384 349.066 528.38 348.845 527.575 349.279L526.666 349.777C525.71 350.301 525.407 351.53 526.019 352.427C527.191 354.152 529.234 357.061 531.371 360.101V360.101L531.372 360.103C535.249 365.62 539.429 371.568 539.252 371.662L538.804 372.207L518.98 351.234C518.361 350.536 517.322 350.412 516.558 350.943L515.368 351.772C514.501 352.373 514.315 353.574 514.962 354.403C517.076 357.141 522.309 363.074 526.665 368.012C530.434 372.285 533.547 375.814 533.417 375.887L532.825 376.46L514.37 360.105C513.716 359.373 512.602 359.29 511.845 359.905L510.943 360.644C510.152 361.285 510.035 362.452 510.682 363.24L528.111 379.685L527.609 380.478L512.478 369.812C511.783 369.19 510.737 369.19 510.035 369.805L509.615 370.185C508.872 370.847 508.789 371.986 509.436 372.753C510.466 373.976 512.505 375.582 514.935 377.498C517.732 379.701 521.047 382.315 523.941 385.222C525.535 386.823 526.82 388.393 528.122 389.983C530.25 392.582 532.422 395.236 536.059 398.173C538.229 399.933 540.194 400.957 542.063 401.931C542.327 402.069 542.59 402.205 542.85 402.343L558.608 392.588ZM694.651 378.839C694.651 378.839 682.99 378.816 674.574 378.787C666.158 378.759 655.575 382.328 655.575 382.328C655.575 382.328 650.069 394.808 669.198 393.678C688.327 392.547 694.651 378.839 694.651 378.839ZM758.433 429.339C758.433 429.339 777.1 457.605 776.677 473.325C776.178 491.859 717.452 537.4 717.452 537.4L702.233 524.895L739.203 472.9L725.758 444.01L758.433 429.339Z" fill="#E576C6"/>
<path d="M706.655 502.231L697.564 514.537L724.947 538.612C724.947 538.612 775.197 501.462 776.748 472.334C777.736 453.782 761.645 427.299 761.645 427.299C761.645 427.299 741.448 394.739 718.101 383.751C713.31 381.496 701.694 379.615 694.652 378.839C692.493 378.601 693.784 379.449 693.042 380.885C692.268 382.385 689.912 384.608 688.281 386.27C684.888 389.727 678.202 392.345 674.61 392.882C671.872 393.29 666.582 393.923 664.037 393.579C661.492 393.234 658.726 392.075 657.986 391.386C657.246 390.698 656.147 389.837 655.576 388.51C655.005 387.183 655.035 387.563 655.035 386.339C655.035 385.115 655.097 385.296 655.216 384.714C655.335 384.131 655.335 383.781 655.405 383.48C655.714 382.148 655.576 382.329 655.576 382.329C641.794 386.528 634.812 388.081 629.792 394.19L591.421 421.351L565.167 386.797L531.292 409.738C531.292 409.738 561.285 466.103 583.022 472.334C600.532 477.354 618.271 461.743 624.508 455.481L617.097 493.425C615.909 499.976 621.596 502.455 626.664 502.223L706.655 502.231Z" fill="#72A065"/>
<path opacity="0.201242" fill-rule="evenodd" clip-rule="evenodd" d="M624.623 455.504L629.209 437.223L616.826 462.206L624.623 455.504Z" fill="black"/>
<path opacity="0.200591" d="M710.055 497.825L731.439 467.235L705.609 427.723" stroke="black" stroke-width="5"/>
</svg>

        </ParallaxLayer>
        <ParallaxLayer speed={1} id="parallax-bubbles" style={{
          zIndex: '1',
          top: '40%'
        }}>
        <svg viewBox="0 0 1351 1008" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="1159.5" cy="541.5" r="52.5" fill="url(#paint0_linear)"/>
          <circle cx="1261" cy="842" r="82" fill="url(#paint1_linear)"/>
          <circle cx="680.5" cy="311.5" r="52.5" fill="url(#paint2_linear)"/>
          <circle cx="282.5" cy="83.5" r="52.5" fill="url(#paint3_linear)"/>
          <circle cx="700.5" cy="733.5" r="52.5" fill="url(#paint4_linear)"/>
          <circle cx="52.5" cy="955.5" r="52.5" fill="url(#paint5_linear)"/>
          <circle cx="217" cy="430" r="66" fill="url(#paint6_linear)"/>
          <circle cx="1283" cy="68" r="68" fill="url(#paint7_linear)"/>
          <defs>
          <linearGradient id="paint0_linear" x1="1133" y1="520" x2="1159.5" y2="594" gradientUnits="userSpaceOnUse">
          <stop stop-color="#396F91"/>
          <stop offset="1"/>
          </linearGradient>
          <linearGradient id="paint1_linear" x1="1219.61" y1="808.419" x2="1261" y2="924" gradientUnits="userSpaceOnUse">
          <stop stop-color="#396F91"/>
          <stop offset="1"/>
          </linearGradient>
          <linearGradient id="paint2_linear" x1="681" y1="311" x2="680.5" y2="364" gradientUnits="userSpaceOnUse">
          <stop stop-color="#396F91"/>
          <stop offset="1"/>
          </linearGradient>
          <linearGradient id="paint3_linear" x1="256" y1="62" x2="282.5" y2="136" gradientUnits="userSpaceOnUse">
          <stop stop-color="#396F91"/>
          <stop offset="1"/>
          </linearGradient>
          <linearGradient id="paint4_linear" x1="674" y1="712" x2="700.5" y2="786" gradientUnits="userSpaceOnUse">
          <stop stop-color="#396F91"/>
          <stop offset="1"/>
          </linearGradient>
          <linearGradient id="paint5_linear" x1="26" y1="934" x2="52.5" y2="1008" gradientUnits="userSpaceOnUse">
          <stop stop-color="#396F91"/>
          <stop offset="1"/>
          </linearGradient>
          <linearGradient id="paint6_linear" x1="248" y1="400" x2="217" y2="496" gradientUnits="userSpaceOnUse">
          <stop stop-color="#396F91"/>
          <stop offset="1"/>
          </linearGradient>
          <linearGradient id="paint7_linear" x1="1248.68" y1="40.1524" x2="1283" y2="136" gradientUnits="userSpaceOnUse">
          <stop stop-color="#396F91"/>
          <stop offset="1"/>
          </linearGradient>
          </defs>
        </svg>


        </ParallaxLayer>
    </div>
  )

}
