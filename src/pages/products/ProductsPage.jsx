import { useState } from "react";
import products from "@/data/nailStyles";

function ProductsPage() {
  const productFieldLabels = {
    pd_name: "商品名稱",
    description: "商品描述",
  };
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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setActiveImageIndex(0);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setActiveImageIndex(0);
  };

  const handleModalOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeProductModal();
    }
  };

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

  const selectedImages = selectedProduct?.images ?? [];
  let productEntries = [];

  if (selectedProduct) {
    productEntries = Object.entries(selectedProduct).map(([key, value]) => {
      if (key === "images") {
        return [key, `${value.length} 張圖片`];
      }

      return [key, value];
    });
    productEntries = productEntries.filter(
      ([key]) =>
        key !== "id" &&
        key !== "images" &&
        key !== "style" &&
        key !== "length" &&
        key !== "shape",
    );
  }

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
                        src={product.images[0]}
                        className="card-img-top"
                        alt={product.pd_name}
                      />
                    </div>
                    <div className="card-body">
                      <div className="d-flex flex-column justify-content-between align-items-center mt-2 mb-8 h-50">
                        <h5 className="card-title">{product.pd_name}</h5>
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                          <small className="badge rounded-pill bg-c-2">
                            {product.style}
                          </small>
                          <small className="badge rounded-pill bg-c-4">
                            {product.length}
                          </small>
                          <small className="badge rounded-pill bg-c-6">
                            {product.shape}
                          </small>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-brand-filled"
                          onClick={() => openProductModal(product)}
                        >
                          詳細資訊
                        </button>
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
      {selectedProduct ? (
        <>
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-detail-title"
            onClick={handleModalOverlayClick}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header bg-bg-3 px-6">
                  <h3
                    className="modal-title fw-bold fs-4 text-t-1"
                    id="product-detail-title"
                  >
                    {selectedProduct.pd_name}
                  </h3>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={closeProductModal}
                  />
                </div>
                <div className="modal-body">
                  <div className="row g-4">
                    <div className="col-12 col-lg-6">
                      <div className="border rounded-4 p-3 bg-bg-2">
                        <img
                          src={selectedImages[activeImageIndex]}
                          alt={`${selectedProduct.pd_name} 圖片 ${
                            activeImageIndex + 1
                          }`}
                          className="img-fluid rounded-3 w-100"
                        />
                      </div>
                      <div className="d-flex justify-content-center gap-4 mt-3 flex-wrap">
                        {selectedImages.map((image, index) => (
                          <div key={image}>
                            <button
                              type="button"
                              className={`btn p-1 border rounded-3 ${
                                activeImageIndex === index
                                  ? "border-c-2 bg-primary-2"
                                  : "border-light-subtle bg-white"
                              }`}
                              onClick={() => setActiveImageIndex(index)}
                              aria-pressed={activeImageIndex === index}
                            >
                              <img
                                src={image}
                                alt={`${selectedProduct.pd_name} 縮圖 ${
                                  index + 1
                                }`}
                                className="rounded-2"
                                style={{
                                  width: "88px",
                                  height: "88px",
                                  objectFit: "cover",
                                }}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <dl className="mb-0 px-2">
                        {productEntries.map(([key, value]) => (
                          <div
                            key={key}
                            className="py-3 border-bottom border-light-subtle"
                          >
                            <dt className="fw-semibold text-t-1 mb-1">
                              {productFieldLabels[key] ?? key}
                            </dt>
                            <dd className="mb-0 text-secondary">{value}</dd>
                          </div>
                        ))}
                      </dl>
                      <div className="d-flex flex-wrap gap-2 mt-4">
                        <span className="badge rounded-pill bg-c-2 px-3 py-2">
                          {selectedProduct.style}
                        </span>
                        <span className="badge rounded-pill bg-c-4 px-3 py-2">
                          {selectedProduct.length}
                        </span>
                        <span className="badge rounded-pill bg-c-6 px-3 py-2">
                          {selectedProduct.shape}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-brand-filled"
                    onClick={closeProductModal}
                  >
                    關閉
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal-backdrop fade show"
            onClick={closeProductModal}
            aria-hidden="true"
          />
        </>
      ) : null}
    </main>
  );
}

export default ProductsPage;
