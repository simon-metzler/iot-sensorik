export default function CustomTooltip({
  active,
  payload,
  label,
}: {
  active: boolean;
  payload: any[];
  label: string;
}) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  } else {
    return null;
  }
}
