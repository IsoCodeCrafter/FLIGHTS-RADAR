import { useSelector } from 'react-redux';

const Header = () => {
  const state = useSelector((store) => store);

  return (
    <header>
      <div>
        <img src="/plane-l.png" />
        <h3>Flights Radar</h3>
      </div>

      <p>
        {state.isLoading
          ? 'Flights calculating...'
          : !state.isError
          ? `${state.flights.length} Fly Found`
          : 'UPPPPS..'}
      </p>
    </header>
  );
};

export default Header;
