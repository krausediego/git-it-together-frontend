// DiagonalTiles.jsx
// Gera o padrão de quadradinhos arredondados com faixas diagonais em tons de laranja.

// Paleta do mais claro (fundo) ao mais escuro.
// Classes completas para o Tailwind não removê-las no purge.
const PALETTE = [
  "bg-neutral-100", // 0: fundo
  "bg-orange-200", // 1: pêssego claro
  "bg-orange-400", // 2: laranja médio
  "bg-orange-600", // 3: laranja forte
  "bg-orange-800", // 4: marrom alaranjado
];

// PRNG determinístico (mulberry32): mesmo seed => mesmo padrão (seguro pra SSR)
function mulberry32(seed: any) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Retorna uma matriz [rows][cols] com índices da PALETTE.
 * period: distância (em colunas) entre uma faixa diagonal e a próxima
 * jitter: chance (0–1) de cada célula variar um tom pra cima/baixo
 */
export function generateDiagonalPattern({
  rows = 7,
  cols = 28,
  period = 7,
  jitter = 0.25,
  seed = 42,
} = {}) {
  const rand = mulberry32(seed);

  // Cada faixa diagonal ganha um "pico" próprio (laranja forte ou marrom)
  const bandPeaks = new Map();
  const peakFor = (band: any) => {
    if (!bandPeaks.has(band)) bandPeaks.set(band, rand() < 0.5 ? 3 : 4);
    return bandPeaks.get(band);
  };

  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => {
      const diag = c - r; // desce pra direita
      const band = Math.floor(diag / period);
      const offset = ((diag % period) + period) % period;

      // Perfil da faixa: borda forte que vai clareando, depois fundo
      const peak = peakFor(band);
      const profile = [peak, 2, 1, 1, 0];
      let level = offset < profile.length ? profile[offset] : 0;

      if (rand() < jitter) {
        level += rand() < 0.5 ? -1 : 1;
        level = Math.max(0, Math.min(PALETTE.length - 1, level));
      }
      return level;
    }),
  );
}

export default function DiagonalTiles({
  rows = 7,
  cols = 28,
  period = 7,
  jitter = 0.25,
  seed = 42,
  className = "",
}) {
  const grid = generateDiagonalPattern({ rows, cols, period, jitter, seed });

  return (
    <div
      aria-hidden="true"
      className={`grid gap-1 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {grid.flat().map((level, i) => (
        <div
          key={i}
          className={`aspect-square rounded-[3px] ${PALETTE[level]}`}
        />
      ))}
    </div>
  );
}
