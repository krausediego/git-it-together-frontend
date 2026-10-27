import logoPrimary from "@/assets/logo-primary.png";

export function LogoPrimaryWithName() {
  return (
    <div className="flex items-center gap-2">
      <img src={logoPrimary} className="size-12" />
      <div className="flex flex-col justify-center leading-none">
        <p className="text-brand-strong font-semibold">Git It</p>
        <p className="text-brand font-bold">Together</p>
      </div>
    </div>
  );
}
