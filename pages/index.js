export default function Home() {
  return (
    <div>
      <form action="/HF">
        <input type="submit" value="Go to Page1" className="Basic-Buttons1" />
      </form>
      <form action="/FA">
        <input type="submit" value="Go to Page2" className="Basic-Buttons2" />
      </form>
      <form action="/E">
        <input type="submit" value="Go to Page3" className="Basic-Buttons3" />
      </form>
    </div>
  );
}
