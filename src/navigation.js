



export const Navigation = ({Navigate,Navigations})=>{
    return (
      <section>
        <div className='navigationcontainer'>
          <div className="navigationwrapper">
            {Navigations.map((items) => {
              return (
                <div className='buttondiv'>
                <button
                  type="button"
                  className="navigationbutton"
                  onClick={() => Navigate(items)}
                >
                  {items}
                </button>
                </div> 
              );
            })}
          </div>
        </div>
      </section>
    );
}