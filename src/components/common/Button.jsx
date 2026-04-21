export default function Button() {
  return (
    <div style={{ padding: "20px" }}>
      <h3>Filled</h3>
      <button className="btn btn-brand-filled btn-brand-md">Filled MD</button>
      <button className="btn btn-brand-filled btn-brand-sm">Filled SM</button>
      <button className="btn btn-brand-filled btn-brand-md" disabled>
        Filled Disabled
      </button>

      <br />
      <br />

      <h3>Outline</h3>
      <button className="btn btn-brand-outline btn-brand-md">Outline MD</button>
      <button className="btn btn-brand-outline btn-brand-sm">Outline SM</button>
      <button className="btn btn-brand-outline btn-brand-md" disabled>
        Outline Disabled
      </button>

      <br />
      <br />

      <h3>Text</h3>
      <button className="btn btn-brand-text btn-brand-md">Text MD</button>
      <button className="btn btn-brand-text btn-brand-sm">Text SM</button>
      <button className="btn btn-brand-text btn-brand-md" disabled>
        Text Disabled
      </button>
    </div>
  );
}
