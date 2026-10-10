import type { VisualDiagram } from '@/lib/visual-diagrams';

function Label({
  text,
  x,
  y,
  size = 44,
}: {
  text: string;
  x: number;
  y: number;
  size?: number;
}) {
  const words = text.split(' ');
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    if (line && (line + ' ' + word).length > 20) {
      lines.push(line);
      line = word;
    } else line += (line ? ' ' : '') + word;
  }
  if (line) lines.push(line);
  return (
    <text
      x={x}
      y={y - (lines.length - 1) * size * 0.6}
      textAnchor="middle"
      fill="#112326"
      fontSize={size}
      fontFamily="var(--font-display), sans-serif"
    >
      {lines.map((l, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : size * 1.2}>
          {l}
        </tspan>
      ))}
    </text>
  );
}
function Node({
  label,
  x,
  y,
  width = 420,
  accent = false,
}: {
  label: string;
  x: number;
  y: number;
  width?: number;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x - width / 2}
        y={y - 58}
        width={width}
        height={116}
        rx={4}
        fill={accent ? '#d9f47d' : '#ffffff'}
        stroke="#687861"
        strokeWidth={2}
      />
      <Label text={label} x={x} y={y + 14} />
    </g>
  );
}
export function TopicDiagram({
  id,
  diagram,
}: {
  id: string;
  diagram: VisualDiagram;
}) {
  if (!diagram) throw new Error(`Schéma éditorial manquant : ${id}`);
  const { labels, layout } = diagram;
  const titleId = `${id}-title`;
  const link = (d: string) => (
    <path d={d} stroke="#687861" strokeWidth={3} fill="none" />
  );
  return (
    <figure className="human-media topic-diagram" data-visual-key={id}>
      <svg viewBox="0 0 1200 800" role="img" aria-labelledby={titleId}>
        <title id={titleId}>
          {`Schéma : ${diagram.title}. ${labels.join(', ')}.`}
        </title>
        <rect width={1200} height={800} fill="#edf1e7" />
        <path d="M60 160 H1140" stroke="#687861" strokeWidth={2} />
        <Label text={diagram.title} x={600} y={95} size={50} />
        {layout === 'matrix' && (
          <>
            {labels.map((label, i) => (
              <Node
                key={label}
                label={label}
                x={i % 2 ? 870 : 330}
                y={i < 2 ? 330 : 590}
                accent={i === 0}
              />
            ))}
            {link('M540 330 H660 M330 388 V532 M870 388 V532 M540 590 H660')}
          </>
        )}
        {layout === 'flow' && (
          <>
            {link('M520 280 H680 M890 338 V532 M680 590 H520')}
            {[
              { x: 310, y: 280 },
              { x: 890, y: 280 },
              { x: 890, y: 590 },
              { x: 310, y: 590 },
            ].map((p, i) => (
              <Node key={i} label={labels[i]} {...p} accent={i === 0} />
            ))}
            <path
              d="m650 262 30 18-30 18 M872 502l18 30 18-30 M550 572l-30 18 30 18"
              stroke="#687861"
              strokeWidth={3}
              fill="none"
            />
          </>
        )}
        {layout === 'stack' && (
          <>
            {labels.map((label, i) => (
              <g key={label}>
                <rect
                  x={135 + i * 60}
                  y={222 + i * 126}
                  width={750}
                  height={94}
                  fill={i === 0 ? '#d9f47d' : '#fff'}
                  stroke="#687861"
                  strokeWidth={2}
                />
                <Label text={label} x={510 + i * 60} y={283 + i * 126} />
              </g>
            ))}
            {link('M1060 269 V647 M1035 647l25 25 25-25')}
          </>
        )}
        {(layout === 'network' || layout === 'orbit') && (
          <>
            {layout === 'orbit' && (
              <ellipse
                cx={600}
                cy={450}
                rx={415}
                ry={230}
                fill="none"
                stroke="#687861"
                strokeWidth={3}
                strokeDasharray="8 10"
              />
            )}
            {layout === 'network' &&
              link('M310 285 L600 450 L890 285 M310 635 L600 450 L890 635')}
            {[
              { x: 300, y: 270 },
              { x: 900, y: 270 },
              { x: 300, y: 650 },
              { x: 900, y: 650 },
            ].map((p, i) => (
              <Node key={i} label={labels[i]} {...p} width={400} />
            ))}
            <Node
              label={diagram.center ?? diagram.title}
              x={600}
              y={460}
              width={440}
              accent
            />
          </>
        )}
        {layout === 'branch' && (
          <>
            {link(
              'M600 318 V370 M300 428 V555 M900 428 V555 M300 613 H600 V730 H900 V613',
            )}
            <Node label={labels[0]} x={600} y={260} accent />
            {link('M300 370 H900 M300 370 V370 M900 370 V370')}
            <Node label={labels[1]} x={300} y={420} />
            <Node label={labels[2]} x={300} y={610} />
            <Node label={labels[3]} x={900} y={610} />
            <Label text={diagram.center ?? ''} x={900} y={430} size={36} />
          </>
        )}
        {layout === 'comparison' && (
          <>
            <rect
              x={100}
              y={220}
              width={470}
              height={485}
              fill="#fff"
              stroke="#687861"
              strokeWidth={2}
            />
            <rect
              x={630}
              y={220}
              width={470}
              height={485}
              fill="#fff"
              stroke="#687861"
              strokeWidth={2}
            />
            <rect x={100} y={220} width={470} height={130} fill="#d9f47d" />
            <rect x={630} y={220} width={470} height={130} fill="#dce5d5" />
            <Label
              text={diagram.columns?.[0] ?? ''}
              x={335}
              y={300}
              size={50}
            />
            <Label
              text={diagram.columns?.[1] ?? ''}
              x={865}
              y={300}
              size={50}
            />
            {labels.map((label, i) => (
              <Label
                key={label}
                text={label}
                x={i < 2 ? 335 : 865}
                y={i % 2 ? 595 : 455}
              />
            ))}
          </>
        )}
      </svg>
    </figure>
  );
}
