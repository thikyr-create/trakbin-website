import { Container, Section, SectionHead } from "@/components/shared/Section";

const T = "16s";

const css = `
.cs-scene * { transform-box: fill-box; }
.cs-res,.cs-drv,.cs-truck,.cs-bag,.cs-lid,.cs-door,.cs-armR,.cs-armD,.cs-wheel { animation-duration:${T}; animation-iteration-count:infinite; animation-timing-function:ease-in-out; }
.cs-res{animation-name:csRes}.cs-drv{animation-name:csDrv}.cs-truck{animation-name:csTruck}
.cs-bag{animation-name:csBag}.cs-lid{animation-name:csLid;transform-origin:left bottom}
.cs-door{animation-name:csDoor;transform-origin:left top}.cs-armR{animation-name:csArmR;transform-origin:top center}
.cs-armD{animation-name:csArmD;transform-origin:top center}.cs-wheel{animation-name:csWheel;transform-origin:center}
@keyframes csRes{0%{transform:translate(0,0);opacity:1}3%{transform:translate(75px,-2px)}6%{transform:translate(150px,0)}11%{transform:translate(150px,0)}14%{transform:translate(75px,-2px)}18%{transform:translate(0,0)}21%{opacity:0}97%{opacity:0}100%{transform:translate(0,0);opacity:1}}
@keyframes csArmR{0%,8%{transform:rotate(0)}10%{transform:rotate(24deg)}14%,100%{transform:rotate(0)}}
@keyframes csLid{0%,6%{transform:rotate(0)}8%,12%{transform:rotate(-70deg)}14%,34%{transform:rotate(0)}36%,48%{transform:rotate(-70deg)}50%,100%{transform:rotate(0)}}
@keyframes csBag{0%{transform:translate(165px,255px);opacity:1}6%{transform:translate(315px,255px)}8%{transform:translate(315px,255px)}11%{transform:translate(315px,290px);opacity:0}34%{transform:translate(315px,290px);opacity:0}36%{transform:translate(315px,250px);opacity:1}42%{transform:translate(370px,225px) rotate(-20deg)}45%{transform:translate(430px,262px) rotate(-40deg);opacity:1}47%,100%{opacity:0}}
@keyframes csTruck{0%,15%{transform:translateX(-1300px)}26%,55%{transform:translateX(0)}68%,100%{transform:translateX(1300px)}}
@keyframes csWheel{0%,15%{transform:rotate(0)}26%,55%{transform:rotate(720deg)}68%,100%{transform:rotate(1440deg)}}
@keyframes csDrv{0%,26%{transform:translate(0,0);opacity:0}28%{transform:translate(0,0);opacity:1}30%{transform:translate(-140px,-2px)}34%,45%{transform:translate(-280px,0)}49%{transform:translate(-140px,-2px)}55%{transform:translate(0,0)}58%,100%{opacity:0}}
@keyframes csArmD{0%,36%{transform:rotate(0)}39%{transform:rotate(-30deg)}45%{transform:rotate(-60deg)}50%,100%{transform:rotate(0)}}
@keyframes csDoor{0%,26%{transform:rotate(0)}28%,55%{transform:rotate(-60deg)}58%,100%{transform:rotate(0)}}
@media (prefers-reduced-motion: reduce){
  .cs-res,.cs-drv,.cs-bag{animation:none;opacity:0}
  .cs-truck,.cs-wheel,.cs-lid,.cs-door,.cs-armR,.cs-armD{animation:none;transform:none}
}
`;

export function CollectionStory() {
  return (
    <Section className="bg-paper overflow-hidden">
      <Container>
        <SectionHead center eyebrow="The collection loop" title="Every bag, tracked end to end."
          lead="From a resident's doorstep to the disposal site, each step is coordinated and recorded in one connected system." />
        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-card card-shadow">
          <style>{css}</style>
          <svg className="cs-scene block w-full h-auto" viewBox="0 0 1200 420" role="img" aria-label="Animated waste collection journey">
            {/* sky + ground */}
            <rect width="1200" height="420" fill="#f6f6f2" />
            <rect y="330" width="1200" height="90" fill="#2b2b28" />
            <rect y="330" width="1200" height="6" fill="#3a3a36" />
            {/* house */}
            <g>
              <rect x="40" y="150" width="220" height="180" rx="6" fill="#24312b" />
              <path d="M30 150 L150 90 L270 150 Z" fill="#16211b" />
              <rect x="130" y="240" width="44" height="90" rx="4" fill="#059669" />
              <rect x="70" y="190" width="40" height="40" rx="4" fill="#a7f3d0" opacity=".7" />
              <rect x="190" y="190" width="40" height="40" rx="4" fill="#a7f3d0" opacity=".7" />
            </g>
            {/* bin */}
            <g transform="translate(320,330)">
              <rect x="-16" y="-52" width="32" height="52" rx="5" fill="#059669" />
              <g className="cs-lid"><rect x="-18" y="-58" width="36" height="8" rx="3" fill="#065f46" /></g>
            </g>
            {/* resident */}
            <g transform="translate(150,330)"><g className="cs-res">
              <circle cx="0" cy="-60" r="9" fill="#e8d8c8" />
              <rect x="-9" y="-50" width="18" height="30" rx="7" fill="#34d399" />
              <rect x="-8" y="-20" width="7" height="20" rx="3" fill="#24312b" />
              <rect x="1" y="-20" width="7" height="20" rx="3" fill="#24312b" />
              <g className="cs-armR"><rect x="6" y="-46" width="6" height="22" rx="3" fill="#34d399" /></g>
            </g></g>
            {/* truck (drawn at stop; rear at x=430) */}
            <g transform="translate(430,340)"><g className="cs-truck">
              <rect x="0" y="-78" width="150" height="70" rx="8" fill="#065f46" />
              <rect x="150" y="-64" width="70" height="56" rx="8" fill="#059669" />
              <rect x="160" y="-56" width="34" height="24" rx="4" fill="#a7f3d0" opacity=".8" />
              <g className="cs-door"><rect x="150" y="-64" width="10" height="56" rx="3" fill="#047857" /></g>
              <g className="cs-wheel"><circle cx="40" cy="0" r="15" fill="#1c1c1a" /><circle cx="40" cy="0" r="6" fill="#4b4b46" /></g>
              <g className="cs-wheel"><circle cx="185" cy="0" r="15" fill="#1c1c1a" /><circle cx="185" cy="0" r="6" fill="#4b4b46" /></g>
            </g></g>
            {/* driver */}
            <g transform="translate(600,330)"><g className="cs-drv">
              <circle cx="0" cy="-60" r="9" fill="#e8d8c8" />
              <rect x="-10" y="-70" width="20" height="6" rx="3" fill="#065f46" />
              <rect x="-9" y="-50" width="18" height="30" rx="7" fill="#059669" />
              <rect x="-8" y="-20" width="7" height="20" rx="3" fill="#24312b" />
              <rect x="1" y="-20" width="7" height="20" rx="3" fill="#24312b" />
              <g className="cs-armD"><rect x="-12" y="-46" width="6" height="22" rx="3" fill="#059669" /></g>
            </g></g>
            {/* bag */}
            <g className="cs-bag"><path d="M-8 0 Q-8 -14 0 -16 Q8 -14 8 0 Z" fill="#3f3f3a" /></g>
          </svg>
        </div>
      </Container>
    </Section>
  );
}