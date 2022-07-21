

export const Contents = ({ MenuItems }) => {
  return (
    <section>
      <div className="maincontents">
        <div className="maincontainer">
          {MenuItems.map((items) => {
            const { id, title, price, description, img } = items;
            return (
                  <div className="contentswrapper" key={id}>
                    <div>
                      <img src={img} alt="menus"></img>
                    </div>
                    <div className="detailswrapper">
                      <div className="detailsdiv">
                        <h2>{title}</h2>
                        <h3>{price}</h3>
                      </div>
                      <div className='descriptiondiv'>
                        <p>{description}</p>
                      </div>
                    </div>
                  </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
