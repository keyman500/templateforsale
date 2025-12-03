import Image from "next/image";
import svgPaths from "./ai-card-svg";
import imgLogo from "../../public/assets/Logo.png";
import imgUserAvatar from "../../public/assets/Logo-2.png";
import imgRectangle34624139 from "../../public/assets/a00ede6740f3cc613425003274e6881753137603.png";

function Shine() {
  return (
    <div className="absolute h-[351px] left-0 top-0 w-[428px]" data-name="Shine">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428 351">
        <g id="Shine">
          <mask height="351" id="mask0_1_107" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="428" x="0" y="0">
            <rect height="350" id="Shine_2" rx="14.5" stroke="var(--stroke-0, black)" width="427" x="0.5" y="0.5" />
          </mask>
          <g mask="url(#mask0_1_107)">
            <g filter="url(#filter0_f_1_107)" id="Ellipse 984">
              <ellipse cx="423" cy="153" fill="var(--fill-0, #045CFF)" fillOpacity="0.4" rx="80" ry="34" />
            </g>
            <g filter="url(#filter1_f_1_107)" id="Ellipse 985">
              <ellipse cx="20.5" cy="29.5" fill="var(--fill-0, #045CFF)" fillOpacity="0.4" rx="100.5" ry="45.5" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="267.6" id="filter0_f_1_107" width="359.6" x="243.2" y="19.2">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_107" stdDeviation="49.9" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="354.8" id="filter1_f_1_107" width="464.8" x="-211.9" y="-147.9">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_107" stdDeviation="65.95" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function RiChatSmileAiFill() {
  return (
    <div className="bg-[rgba(4,92,255,0.07)] box-border content-stretch flex flex-col gap-[10px] h-[35px] items-center justify-center overflow-clip px-0 py-px relative rounded-[10px] shrink-0 w-[36px]" data-name="ri:chat-smile-ai-fill">
      <div className="relative shrink-0 size-[21px]" data-name="Logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image alt="" className="absolute max-w-none" src={imgLogo} width={23} height={21} style={{ width: "107.28%" }} />
        </div>
      </div>
    </div>
  );
}

function AIBadge() {
  return (
    <div className="absolute h-[15px] left-[64px] top-0 w-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
        <g id="Frame 427319231">
          <rect fill="var(--fill-0, #045CFF)" fillOpacity="0.2" height="15" rx="3.75" width="18" />
          <g id="AI">
            <path d={svgPaths.p3480ea80} fill="var(--fill-0, #045CFF)" />
            <path d={svgPaths.pcc578c0} fill="var(--fill-0, #045CFF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[178px]">
      <p className="font-['Neue_Montreal:Medium',sans-serif] leading-[25px] min-w-full not-italic relative shrink-0 text-[18px] text-black tracking-[-0.36px] w-[min-content]">Telezen</p>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[25px] min-w-full not-italic relative shrink-0 text-[#a0a0a0] text-[12px] tracking-[-0.24px] w-[min-content]">AI agent will respond right away</p>
      <AIBadge />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <RiChatSmileAiFill />
      <HeaderContent />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[21.937px] relative shrink-0 w-[22.006px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Group">
          <path d={svgPaths.p2ec58200} fill="var(--fill-0, #D97757)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ModelName() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[25px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.28px] whitespace-pre">Claude 4</p>
    </div>
  );
}

function AngleDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="angle-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="angle-down">
          <path d={svgPaths.p392b8b00} id="Vector" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ModelSelector() {
  return (
    <div className="bg-[rgba(247,247,247,0.5)] box-border content-stretch flex gap-[10px] h-[31px] items-center justify-end pl-[10px] pr-[5px] py-[10px] relative rounded-[9px] shrink-0 w-[100px]">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <ModelName />
      <AngleDown />
    </div>
  );
}

function ModelSelectorWithIcon() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <Group />
      <ModelSelector />
    </div>
  );
}

function TopHeader() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Header />
      <ModelSelectorWithIcon />
    </div>
  );
}

function UserMessageBubble() {
  return (
    <div className="bg-[rgba(4,92,255,0.05)] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-bl-[10px] rounded-br-[5px] rounded-tl-[10px] rounded-tr-[10px] shrink-0">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[25px] not-italic relative shrink-0 text-[#045cff] text-[15px] text-nowrap tracking-[-0.3px] whitespace-pre">Hello, how are you?</p>
    </div>
  );
}

function UserMessageRight() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[197px] top-0">
      <UserMessageBubble />
      <div className="relative shrink-0 size-[40px]">
        <Image alt="" className="block max-w-none" src={imgUserAvatar} width={40} height={40} />
      </div>
    </div>
  );
}

function UserMessageBubbleLong() {
  return (
    <div className="bg-[rgba(4,92,255,0.05)] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-bl-[10px] rounded-br-[5px] rounded-tl-[10px] rounded-tr-[10px] shrink-0">
      <div className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#045cff] text-[15px] text-nowrap tracking-[-0.3px] whitespace-pre">
        <p className="mb-0">{`I want to create a workflow that will send an `}</p>
        <p>email to all my clients.</p>
      </div>
    </div>
  );
}

function UserMessageLeft() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[53px] top-[117px]">
      <UserMessageBubbleLong />
      <div className="relative shrink-0 size-[40px]">
        <Image alt="" className="block max-w-none" src={imgUserAvatar} width={40} height={40} />
      </div>
    </div>
  );
}

function AIAvatarSmall() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center relative rounded-[44px] shrink-0 size-[40px]">
      <div className="relative shrink-0 size-[21px]" data-name="Logo">
        <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
          <Image alt="" className="absolute max-w-none" src={imgLogo} width={23} height={21} style={{ width: "107.28%" }} />
        </div>
      </div>
    </div>
  );
}

function AIMessageBubble() {
  return (
    <div className="bg-[#f4f4f4] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-bl-[5px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] shrink-0">
      <div className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black text-nowrap tracking-[-0.3px] whitespace-pre">
        <p className="mb-0">I&apos;m living the dream, answering messages</p>
        <p>all day! How about you?</p>
      </div>
    </div>
  );
}

function AIMessageLeft() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[53px]">
      <AIAvatarSmall />
      <AIMessageBubble />
    </div>
  );
}

function AIAvatarSmall2() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex gap-[10px] items-center justify-center relative rounded-[44px] shrink-0 size-[40px]">
      <div className="relative shrink-0 size-[21px]" data-name="Logo">
        <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
          <Image alt="" className="absolute max-w-none" src={imgLogo} width={23} height={21} style={{ width: "107.28%" }} />
        </div>
      </div>
    </div>
  );
}

function AIMessageBubbleShort() {
  return (
    <div className="bg-[#f4f4f4] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-bl-[5px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] shrink-0">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black text-nowrap tracking-[-0.3px] whitespace-pre">Nah, do it yourself.</p>
    </div>
  );
}

function AIMessageLeft2() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[181px]">
      <AIAvatarSmall2 />
      <AIMessageBubbleShort />
    </div>
  );
}

function MessagesContainer() {
  return (
    <div className="h-[221px] relative shrink-0 w-full">
      <UserMessageRight />
      <UserMessageLeft />
      <AIMessageLeft />
      <AIMessageLeft2 />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path d="M10 4.16667V15.8333M4.16667 10H15.8333" stroke="#A0A0A0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function Microphone() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10V5C12.5 3.61929 11.3807 2.5 10 2.5C8.61929 2.5 7.5 3.61929 7.5 5V10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#045CFF" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M15.8333 9.16667V10C15.8333 13.2217 13.2217 15.8333 10 15.8333M10 15.8333C6.77834 15.8333 4.16667 13.2217 4.16667 10V9.16667M10 15.8333V18.3333M6.66667 18.3333H13.3333" stroke="#045CFF" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function InputLabel() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0">
      <Plus />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a0a0a0] text-[15px] text-nowrap tracking-[-0.3px] whitespace-pre">Ask Telezen AI</p>
    </div>
  );
}

function InputFieldContent() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[360px]">
      <InputLabel />
      <Microphone />
    </div>
  );
}

function InputField() {
  return (
    <div className="h-[46px] relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[46px] items-start px-[13px] py-[12px] relative w-full">
          <InputFieldContent />
        </div>
      </div>
    </div>
  );
}

function ChatContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full">
      <MessagesContainer />
      <InputField />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[20px] top-[20px] w-[388px]">
      <TopHeader />
      <ChatContainer />
    </div>
  );
}

function Shadow() {
  return (
    <div className="absolute h-[230px] left-[78px] top-[87px] w-[487px]" data-name="Shadow">
      <svg className="absolute inset-[-96%_-45%]" width="978" height="672" viewBox="0 0 978 672" fill="none">
        <g filter="url(#filter0_f_shadow_ai)">
          <ellipse cx="489" cy="336" rx="289" ry="136" fill="#045CFF" fillOpacity="0.15" />
        </g>
        <defs>
          <filter id="filter0_f_shadow_ai" x="0" y="0" width="978" height="672" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function LeftMaskGroup() {
  return (
    <div className="absolute left-0 top-[53px] w-[254px] h-[254px] opacity-30 overflow-hidden" data-name="Mask group">
      <div
        className="absolute w-[307px] h-[307px] rounded-full"
        style={{
          left: "-27px",
          top: "-53px",
          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 307 307\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"0.7\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(7.5 11.2 -11.2 7.5 153.5 153.5)\"><stop stop-color=\"rgba(4,92,255,1)\" offset=\"0\"/><stop stop-color=\"rgba(4,92,255,0)\" offset=\"1\"/></radialGradient></defs></svg>')",
          maskImage: `url('${imgRectangle34624139.src}')`,
          WebkitMaskImage: `url('${imgRectangle34624139.src}')`,
          maskSize: "307px 307px",
          WebkitMaskSize: "307px 307px",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />
    </div>
  );
}

function RightMaskGroup() {
  return (
    <div className="absolute right-0 top-[73px] w-[300px] h-[369px] opacity-30 overflow-hidden" data-name="Mask group">
      <div
        className="absolute w-[369px] h-[369px] rounded-full"
        style={{
          left: "-35px",
          top: "-6px",
          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 369 369\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"0.7\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(9 13.4 -13.4 9 184.5 184.5)\"><stop stop-color=\"rgba(4,92,255,1)\" offset=\"0\"/><stop stop-color=\"rgba(4,92,255,0)\" offset=\"1\"/></radialGradient></defs></svg>')",
          maskImage: `url('${imgRectangle34624139.src}')`,
          WebkitMaskImage: `url('${imgRectangle34624139.src}')`,
          maskSize: "369px 369px",
          WebkitMaskSize: "369px 369px",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />
    </div>
  );
}

function Base() {
  return (
    <div className="absolute bg-white h-[396px] left-[90px] rounded-[15px] top-[97px] w-[428px]" data-name="Base" />
  );
}

function CardContent() {
  return (
    <div className="absolute h-[371px] left-[90px] top-[97px] w-[428px]">
      <Shine />
      <MainContent />
    </div>
  );
}

export default function AICard() {
  return (
    <div className="relative w-[596px] h-[500px]">
      <LeftMaskGroup />
      <RightMaskGroup />
      <Shadow />
      <Base />
      <CardContent />
    </div>
  );
}