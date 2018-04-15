import HeadNavigation from 'Components/HeadNavigation';

const AppLayout = (props) => {
  return (
    <div>
      <HeadNavigation />
      {props.children}
    </div>
  );
};

export default AppLayout;