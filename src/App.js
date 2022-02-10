import './App.css';

function App() {
  let date = new Date();
  const today = date.getDay();
  console.log(today)

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          12 Week Half-Marathon Training Plan
        </h2>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>Weeks Remaining</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
              <th>Total Miles</th>
            </tr>  
          </thead>
          <tbody>
            <tr>
              <td>12</td>
              <td><i className="fas fa-dumbbell"></i></td>
              <td><i className="fas fa-dumbbell"></i></td>
              <td>3.1 miles</td>
              <td><i className="fas fa-dumbbell"></i></td>
              <td>4 miles</td>
              <td><i className="fas fa-hiking"></i> / <i className="fas fa-bed"></i></td>
              <td>4 miles</td>
              <td>11.1</td>
            </tr>
            <tr>
              <td>11</td>
              <td><i className="fas fa-dumbbell"></i></td>
              <td><i className="fas fa-dumbbell"></i></td>
              <td>4 miles</td>
              <td><i className="fas fa-dumbbell"></i></td>
              <td>4 miles</td>
              <td><i className="fas fa-hiking"></i> / <i className="fas fa-bed"></i></td>
              <td>4 miles</td>
              <td>12</td>
            </tr>
            <tr>
              <td>10</td>
              <td><i className="fas fa-dumbbell"></i></td>
              <td><i className="fas fa-dumbbell"></i></td>
              <td>5 miles</td>
              <td><i className="fas fa-dumbbell"></i></td>
              <td>4 miles</td>
              <td><i className="fas fa-hiking"></i> / <i className="fas fa-bed"></i></td>
              <td>5 miles</td>
              <td>14</td>
            </tr>
            <tr>
              <td>9</td>
              <td><i className="fas fa-dumbbell"></i></td>
              <td><i className="fas fa-dumbbell"></i></td>
              <td>5 miles</td>
              <td><i className="fas fa-dumbbell"></i></td>
              <td>4 miles</td>
              <td><i className="fas fa-hiking"></i> / <i className="fas fa-bed"></i></td>
              <td>5 miles</td>
              <td>14</td>
            </tr>
            <tr className="blank-row">
              <td className="blank-row"></td>
              <td className="blank-row"></td>
              <td className="blank-row"></td>
              <td className="blank-row"></td>
              <td className="blank-row"></td>
              <td className="blank-row"></td>
              <td className="blank-row"></td>
              <td className="blank-row">Month 1</td>
              <td className="blank-row">51</td>
            </tr>
            <tr>
              <td>8</td>
              <td></td>
              <td></td>
              <td>5 miles</td>
              <td></td>
              <td>5 miles</td>
              <td></td>
              <td>8.1 miles</td>
              <td>18.1</td>
            </tr>
            <tr>
              <td>7</td>
              <td></td>
              <td></td>
              <td>5 miles</td>
              <td>4 miles</td>
              <td>5 miles</td>
              <td></td>
              <td>9.3 miles</td>
              <td>23.3</td>
            </tr>
            <tr>
              <td>6</td>
              <td></td>
              <td></td>
              <td>4 miles</td>
              <td>8.1 miles</td>
              <td></td>
              <td></td>
              <td>9.3 miles</td>
              <td>21.4</td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td>8.1 miles</td>
              <td>5 miles</td>
              <td>5 miles</td>
              <td></td>
              <td></td>
              <td>5 miles</td>
              <td>23.1</td>
            </tr>
            <tr className="blank-row blank-row-bottom">
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row">Month 2</td>
              <td className="blank-row">85.9</td>
            </tr>
            <tr className="blank-row">
              <td className="blank-row"></td>
              <td className="blank-row"></td>
              <td className="blank-row"></td>
              <td className="blank-row"></td>
              <td className="blank-row"></td>
              <td className="blank-row"></td>
              <td className="blank-row"></td>
              <td className="blank-row">Running Total</td>
              <td className="blank-row">137</td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td>3.1 miles</td>
              <td>9.3 miles</td>
              <td>5 miles</td>
              <td></td>
              <td></td>
              <td>13.1 miles</td>
              <td>30.5</td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td>3.1 miles</td>
              <td>5 miles</td>
              <td>5 miles</td>
              <td></td>
              <td></td>
              <td>9.3 miles</td>
              <td>22.4</td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td>5 miles</td>
              <td>8.1 miles</td>
              <td>3.1 miles</td>
              <td></td>
              <td></td>
              <td>8.1 miles</td>
              <td>24.3</td>
            </tr>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td>5 miles</td>
              <td></td>
              <td>3.1 miles</td>
              <td></td>
              <td><i className="fas fa-trophy"></i></td>
              <td>8.1</td>
            </tr>
            <tr className="blank-row blank-row-bottom">
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row">Month 3</td>
              <td className="blank-row">85.3</td>
            </tr>
            <tr className="blank-row blank-row-bottom">
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom"></td>
              <td className="blank-row blank-row-bottom">Grand Total</td>
              <td className="blank-row blank-row-bottom">235.4</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
