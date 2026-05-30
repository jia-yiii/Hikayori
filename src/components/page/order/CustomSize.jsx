import { useWatch } from "react-hook-form";
import { IconSparkleHighlight } from "@tabler/icons-react";
import Button from "@/components/common/Button";

function CustomSize({ control, fingers, register, setValue, style }) {
  const customType = useWatch({ control, name: "customType" });

  return (
    <div className="container">
      <div className="d-flex align-items-bottom gap-4 my-6">
        <div className="d-inline fs-5 ms-1 me-4">
          <IconSparkleHighlight stroke={2} className="me-1" />
          <span className="fw-bold ">客製方式</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          active={customType === "softTape"}
          onClick={() =>
            setValue("customType", "softTape", { shouldDirty: true })
          }
        >
          客製軟尺
        </Button>
        <Button
          variant="outline"
          size="sm"
          active={customType === "mold"}
          onClick={() => setValue("customType", "mold", { shouldDirty: true })}
        >
          客製模土
        </Button>
      </div>

      {customType === "softTape" && (
        <div className="my-5">
          <div className={style.sizeBlock}>
            <p className={style.handLabel}>左手尺寸</p>
            <div className={style.sizeGrid}>
              {fingers.map((finger) => (
                <label key={`left-${finger.field}`} className={style.sizeCell}>
                  <span>{finger.label}</span>
                  <input
                    type="number"
                    min="3"
                    max="20"
                    aria-label={`左手${finger.label}尺寸`}
                    {...register(`customSize.left.${finger.field}`)}
                  />
                </label>
              ))}
            </div>
          </div>
          <div className={style.sizeBlock}>
            <p className={style.handLabel}>右手尺寸</p>
            <div className={style.sizeGrid}>
              {fingers.map((finger) => (
                <label key={`right-${finger.field}`} className={style.sizeCell}>
                  <span>{finger.label}</span>
                  <input
                    type="number"
                    min="3"
                    max="20"
                    aria-label={`右手${finger.label}尺寸`}
                    {...register(`customSize.right.${finger.field}`)}
                  />
                </label>
              ))}
            </div>
          </div>
          <p className="text-t-3 text-end fs-6 me-8">尺寸測量單位：mm</p>
        </div>
      )}

      {customType === "mold" && (
        <div>
          <p className="ps-8">
            1. 請填寫製作模土時留下的個人資訊。
            <br />
            2. 如尚未訂製模土請至賣場下單製作，以免交貨時間延長。
          </p>
          <div className={style.inputRow}>
            <label htmlFor="name" className="form-label fw-bold">
              姓名
            </label>
            <div>
              <input
                id="name"
                type="text"
                placeholder="請輸入姓名"
                {...register("mold.name")}
              />
            </div>
          </div>
          <div className={style.inputRow}>
            <label htmlFor="tel" className="form-label fw-bold">
              收件人電話
            </label>
            <div>
              <input
                id="tel"
                type="tel"
                placeholder="請輸入電話"
                {...register("mold.tel")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomSize;
