import TippyHeadless from "@tippyjs/react/headless";

function Popup({ children, option, content, onhide}) {   
   return (
      <TippyHeadless
      interactive
      placement="bottom"
      render={(attrs) => (
         <div tabIndex="-1" {...attrs}>
            {content}
         </div>
      )}
      onhide={onhide}
      {...option}
      >
         {children}
      </TippyHeadless>
   );
}

export default Popup;
