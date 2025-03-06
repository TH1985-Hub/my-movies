export function Error({ color = "#EC8305" }) {
    return (
      <p className="d-flex flex-column justify-content-center align-items-center">
        <span style={{ color, fontSize: "1.2rem", fontWeight: "bold" }}>
          ❌ There was an error fetching questions.
        </span>
      </p>
    );
  }