export default function FirstPage() {
  const items = [];
  const residues = [];
  const states = [];
  const cities = [];
  const districts = [];

  states.push({ name: "Goias" });
  cities.push({ name: "Anapolis" });
  districts.push({ name: "Setor Central" });

  residues.push({ name: "Metal" });
  residues.push({ name: "Plastico" });
  residues.push({ name: "Vidro" });
  residues.push({ name: "Papel" });

  for (let i = 0; i <= 20; i++) {
    items.push({
      title: `Titulo ${i}`,
      street: `Rua ${i}`,
      district: `Bairro ${i}`,
      city: `CIdade ${i}`,
      state: `Estado ${i}`,
      residue: `Residuo ${i}`,
    });
  }

  return (
    <div>
      <h1 className="text-center my-5">
        Encontre o ponto de coleta mais próximo de você!
      </h1>
      <div className="mx-5 d-flex justify-content-around">
        <div className="bg-dark text-white" style={{ borderRadius: "5px" }}>
          <div className="m-5 text-center">
            <img src="Ecorex-1.png" />
            <h1 className="my-4">Contato</h1>
            <p>E-mail : pedroras004@gmail.com</p>
            <p>Telefone : +55 61 9 9689 - 7678</p>
            <small>
              Se entende a importância do nosso trabalho e sente de coração que
              quer nos ajudar, por favor, contribua com qualquer quantia que
              puder
            </small>
            <div className="d-flex justify-content-around my-4">
              <img src="instagram.png" />
              <img src="whatsapp.png" />
              <img src="facebook.png" />
            </div>
            <hr />
            <button
              type="button"
              className="btn btn-light p-3 mt-3"
              style={{ borderRadius: "30px" }}
            >
              CONTRIBUA
            </button>
          </div>
        </div>
        <div className="container">
          <nav
            className="navbar bg-light justify-content-around"
            style={{ borderRadius: "30px" }}
          >
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ borderRadius: "30px" }}
              >
                Residuo
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {residues.map((residue, index) => {
                  return (
                    <li key={index}>
                      <a className="dropdown-item" href="#">
                        {residue.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ borderRadius: "30px" }}
              >
                Estado
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {states.map((state, index) => {
                  return (
                    <li key={index}>
                      <a className="dropdown-item" href="#">
                        {state.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ borderRadius: "30px" }}
              >
                Cidade
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {cities.map((city, index) => {
                  return (
                    <li key={index}>
                      <a className="dropdown-item" href="#">
                        {city.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ borderRadius: "30px" }}
              >
                Bairro
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {districts.map((district, index) => {
                  return (
                    <li key={index}>
                      <a className="dropdown-item" href="#">
                        {district.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
          {items.length > 0 ? (
            <div className="row justify-content-center">
              {items.map((item, index) => {
                return (
                  <div
                    className="card m-3 py-3"
                    style={{ width: "40%", borderRadius: "20px" }}
                    key={index}
                  >
                    <div className="d-flex justify-content-around">
                      <div>
                        <h1 className="mb-4">{item.title}</h1>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="m-0">{item.street}</p>
                            <p className="m-0">{item.district}</p>
                            <p className="m-0">{item.city}</p>
                            <p className="m-0">{item.state}</p>
                          </div>
                          <div className="mt-4">
                            <img src="map-icon.png" />
                          </div>
                        </div>
                      </div>
                      <div className="ml-5">
                        <span className="badge rounded-pill bg-success mt-3">
                          {item.residue}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center mt-5">
              <h1>Nenhum ponto encontrado</h1>
              <img src="Ecorex-2.png" className="mt-5" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
