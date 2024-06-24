export default function DataTable({ data }: { data: any[] }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.timestamp}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
