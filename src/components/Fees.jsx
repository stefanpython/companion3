import "./Fees.css";

function Fees() {
  return (
    <div className="fees-container">
      <br />
      <br />
      <h2>Fees</h2>

      <hr />

      <div className="fees-content">
        <p>Depending on your requests the fees can vary as following:</p>
        <li>Face to face online:</li>

        <div className="price-container">
          <p>- £50 per 45 min, for a minimum of 6 sessions</p>
          <p>
            - £80 per one single session aimed to get support on a particular
            issue or just being there for you in crisis.
          </p>
        </div>
        <br />
        <li>
          Telephone call only, purely confidential - we will not see you:{" "}
        </li>

        <div className="price-container">
          <p>- £100 per session, for a minimum 6 sessions</p>
          <p>- £150 per a single session</p>
        </div>
        <br />
        <li>Written adivice via email or text messages:</li>

        <div className="price-container">
          <p>- £20 aim to get support in a particular issue. </p>
        </div>

        <p>We will ansewer your question in maximum 24 hours. </p>

        <p className="special-note">
          Special note: given our professional backround and ethics, we would
          like to emphasise from the beginning that we have zero tolerance to
          breaching Human Rights legislation. This is not a dark website, and no
          unaceptable behaviour will be tolerated. Any conversation which
          includes the above will be interrupted and where neccessary, reported
          to the relevant authorities.
        </p>

        <div className="memoriam-text">
          <p>In the memory of my beloved friend R.C.</p>
        </div>
      </div>
    </div>
  );
}

export default Fees;
