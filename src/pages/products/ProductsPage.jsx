import { useState } from "react";
import { Link } from "react-router-dom";
import products from "@/data/nailStyles";

function ProductsPage() {
  const styleOptions = [
    "全部",
    ...new Set(products.map((product) => product.style)),
  ];
  const lengthOptions = [
    "全部",
    ...new Set(products.map((product) => product.length)),
  ];
  const shapeOptions = [
    "全部",
    ...new Set(products.map((product) => product.shape)),
  ];
  const getFilterButtonClass = (isActive) =>
    `badge rounded-pill border mx-2 ${
      isActive
        ? "bg-c-2 text-white border-c-2"
        : "bg-primary-2 text-t-1 border-primary-2"
    }`;
  const [filters, setFilters] = useState({
    style: ["全部"],
    length: ["全部"],
    shape: ["全部"],
  });

  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const currentValues = prev[type];

      if (value === "全部") {
        return {
          ...prev,
          [type]: ["全部"],
        };
      }

      const nextValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues.filter((item) => item !== "全部"), value];

      return {
        ...prev,
        [type]: nextValues.length > 0 ? nextValues : ["全部"],
      };
    });
  };

  const filteredProducts = products.filter((product) => {
    const matchStyle =
      filters.style.includes("全部") || filters.style.includes(product.style);
    const matchLength =
      filters.length.includes("全部") ||
      filters.length.includes(product.length);
    const matchShape =
      filters.shape.includes("全部") || filters.shape.includes(product.shape);

    return matchStyle && matchLength && matchShape;
  });

  return (
    <main>
      <section>
        <div className="container">
          <h2>ProductsPage</h2>
        </div>
      </section>
      <section className="container">
        <div>
          <div className="filter-group">
            風格{" "}
            {styleOptions.map((style) => (
              <button
                key={style}
                onClick={() => handleFilterChange("style", style)}
                className={getFilterButtonClass(filters.style.includes(style))}
              >
                {style}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-group mt-3">
          長度{" "}
          {lengthOptions.map((length) => (
            <button
              key={length}
              onClick={() => handleFilterChange("length", length)}
              className={getFilterButtonClass(filters.length.includes(length))}
            >
              {length}
            </button>
          ))}
        </div>
        <div className="filter-group mt-3">
          甲型{" "}
          {shapeOptions.map((shape) => (
            <button
              key={shape}
              onClick={() => handleFilterChange("shape", shape)}
              className={getFilterButtonClass(filters.shape.includes(shape))}
            >
              {shape}
            </button>
          ))}
        </div>
      </section>
      <section>
        <div className="container my-3">
          <div className="row row-cols-2 row-cols-lg-4 g-4 ">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col" key={product.id}>
                  <div className="card h-100">
                    <div className="m-3">
                      <img
                        src={product.img}
                        className="card-img-top"
                        alt={product.pd_name}
                      />
                    </div>
                    <div className="card-body">
                      <div className="d-flex flex-column justify-content-between align-items-center mt-2 mb-8 h-50">
                        <h5 className="card-title">{product.pd_name}</h5>
                        <div>
                          <small className="badge rounded-pill bg-c-2">
                            {product.style}
                          </small>
                          {"    "}
                          <small className="badge rounded-pill bg-c-4">
                            {product.length}
                          </small>
                          {"    "}
                          <small className="badge rounded-pill bg-c-6">
                            {product.shape}
                          </small>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        <Link to="#" className="btn btn-brand-filled">
                          詳細資訊
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-12 text-center py-5">
                目前沒有符合目前篩選條件的商品。
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductsPage;
