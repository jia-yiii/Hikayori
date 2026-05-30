import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import nail from "@/assets/nails/orange.png";
import style from "@/pages/order/orderFormPage.module.scss";
import Button from "@/components/common/Button";
import Custom from "@/components/page/order/CustomSize";
import { IconConfettiFilled } from "@tabler/icons-react";

function OrderFormPage() {
  const [isCopied, setIsCopied] = useState(false);
  const { control, register, setValue } = useForm({
    defaultValues: {
      customSize: {
        left: {},
        right: {},
      },
      customType: "",
      length: "",
      message: "",
      mold: {
        name: "",
        tel: "",
      },
      shape: "",
      size: "",
      sizeType: "",
      style: "",
    },
  });
  const formValues = useWatch({ control });
  const fingers = [
    { field: "thumb", label: "拇指" },
    { field: "index", label: "食指" },
    { field: "middle", label: "中指" },
    { field: "ring", label: "無名指" },
    { field: "little", label: "小指" },
  ];
  const sizeType = formValues.sizeType;
  const customType = formValues.customType;
  const fallbackText = "未填寫";
  const sizeTypeLabels = {
    custom: "客製",
    standard: "公版",
  };
  const customTypeLabels = {
    mold: "客製模土",
    softTape: "客製軟尺",
  };
  const showValue = (value) => value || fallbackText;
  const renderHandSize = (hand) =>
    fingers
      .map((finger) => {
        const value = formValues.customSize?.[hand]?.[finger.field];
        return `${finger.label}：${value ? `${value} mm` : fallbackText}`;
      })
      .join("、");
  const getConfirmText = () => {
    const confirmItems = [
      ["款式", "暖橙日常・柔光承雲"],
      ["原款甲型", "方圓"],
      ["原款長度", "中"],
      ["喜歡的感覺", showValue(formValues.style)],
      ["想要的長度", showValue(formValues.length)],
      ["想要的形狀", showValue(formValues.shape)],
      ["尺寸類型", showValue(sizeTypeLabels[sizeType])],
    ];

    if (sizeType === "standard") {
      confirmItems.push(["公版尺寸", showValue(formValues.size)]);
    }

    if (sizeType === "custom") {
      confirmItems.push(["客製方式", showValue(customTypeLabels[customType])]);

      if (customType === "softTape") {
        confirmItems.push(
          ["左手尺寸", renderHandSize("left")],
          ["右手尺寸", renderHandSize("right")],
        );
      }

      if (customType === "mold") {
        confirmItems.push(
          ["模土姓名", showValue(formValues.mold?.name)],
          ["模土電話", showValue(formValues.mold?.tel)],
        );
      }
    }

    confirmItems.push(["備註", showValue(formValues.message)]);

    return confirmItems
      .map(([label, value]) => `${label}：${value}`)
      .join("\n");
  };
  const handleCopyConfirmText = async () => {
    try {
      await navigator.clipboard.writeText(getConfirmText());
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 2000);
    } catch {
      alert("複製失敗，請再試一次");
    }
  };

  return (
    <main>
      <section className={style.hero}>
        <div className={`container ${style.heroCopy}`}>
          <h1>填寫諮詢表格</h1>
          <p>填寫感興趣的指甲造型，加速與美甲師進行下一步的討論與訂購</p>
        </div>
      </section>
      <section className="container">
        <form action="" className="d-flex flex-column gap-10">
          <section>
            <h2 className="fs-4 my-10">
              <IconConfettiFilled className="me-2 mb-1" />
              款式確認
            </h2>
            <div className="d-flex gap-6 ps-6">
              <img
                src={nail}
                className={`${style.pdImg}`}
                alt="selectedPdImg"
              />
              <div>
                <h4> 暖橙日常・柔光承雲</h4>
                <p>甲型：方圓</p>
                <p>長度：中</p>
                <Button variant="outline" size="sm">
                  重新挑選
                </Button>
              </div>
            </div>
          </section>
          <section>
            <div className="d-flex align-items-center gap-4">
              <h2 className="fs-4">
                {" "}
                <IconConfettiFilled className="me-2 mb-1" />
                甲型確認
              </h2>
              <small className="badge rounded-pill bg-c-1 fw-bold text-white">
                NOTICE：請詳閱日和指南說明後再填寫
              </small>
            </div>
            <div className={style.radioRow}>
              <p>喜歡的感覺</p>
              <label>
                <input type="radio" value="修長" {...register("style")} />
                修長
              </label>
              <label>
                <input type="radio" value="貼合" {...register("style")} />
                貼合
              </label>
            </div>
            <div className={style.radioRow}>
              <p>想要的長度</p>
              <label>
                <input type="radio" value="短" {...register("length")} />短
              </label>
              <label>
                <input type="radio" value="中" {...register("length")} />中
              </label>
              <label>
                <input type="radio" value="長" {...register("length")} />長
              </label>
            </div>
            <div className={style.radioRow}>
              <p>想要的形狀</p>
              <label>
                <input type="radio" value="橢圓" {...register("shape")} />
                橢圓
              </label>
              <label>
                <input type="radio" value="杏仁" {...register("shape")} />
                杏仁
              </label>
              <label>
                <input type="radio" value="方圓" {...register("shape")} />
                方圓
              </label>
              <label>
                <input type="radio" value="梯形" {...register("shape")} />
                梯形
              </label>
            </div>
          </section>
          <section>
            <div>
              <div className="d-flex align-items-bottom gap-8">
                <h2 className="fs-4">
                  {" "}
                  <IconConfettiFilled className="me-2 mb-1" />
                  尺寸填寫
                </h2>
                <div className="d-flex align-items-bottom gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    active={sizeType === "standard"}
                    onClick={() =>
                      setValue("sizeType", "standard", { shouldDirty: true })
                    }
                  >
                    公版
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    active={sizeType === "custom"}
                    onClick={() =>
                      setValue("sizeType", "custom", { shouldDirty: true })
                    }
                  >
                    客製
                  </Button>
                </div>
              </div>
              {sizeType === "standard" && (
                <>
                  <small className="badge rounded-pill bg-c-1 fw-bold text-white mt-3 ms-8">
                    NOTICE：請詳閱公版尺寸表後再選擇
                  </small>
                  <div className={style.radioRow}>
                    <p>尺寸選擇</p>
                    <label>
                      <input type="radio" value="XS" {...register("size")} />
                      XS
                    </label>
                    <label>
                      <input type="radio" value="S" {...register("size")} />S
                    </label>
                    <label>
                      <input type="radio" value="M" {...register("size")} />M
                    </label>
                    <label>
                      <input type="radio" value="L" {...register("size")} />L
                    </label>
                  </div>
                </>
              )}
              {sizeType === "custom" && (
                <Custom
                  control={control}
                  fingers={fingers}
                  register={register}
                  setValue={setValue}
                  style={style}
                />
              )}
            </div>
          </section>
          <section>
            <h2 className="fs-4">
              <IconConfettiFilled className="me-2 mb-1" />
              備註
            </h2>
            <label className={style.noteField}>
              <textarea
                id="message"
                className={`"form-control" ${style.unitNote}`}
                placeholder="如有客製需求歡迎留言"
                cols="30"
                rows="4"
                {...register("message")}
              ></textarea>
            </label>
          </section>
          <section>
            <h2 className="fs-4 mb-8">
              <IconConfettiFilled className="me-2 mb-1" />
              最後確認
            </h2>
            <div className={style.confirmBox}>
              <dl>
                <div>
                  <dt>款式</dt>
                  <dd>暖橙日常・柔光承雲</dd>
                </div>
                <div>
                  <dt>原款甲型</dt>
                  <dd>方圓</dd>
                </div>
                <div>
                  <dt>原款長度</dt>
                  <dd>中</dd>
                </div>
                <div>
                  <dt>喜歡的感覺</dt>
                  <dd>{showValue(formValues.style)}</dd>
                </div>
                <div>
                  <dt>想要的長度</dt>
                  <dd>{showValue(formValues.length)}</dd>
                </div>
                <div>
                  <dt>想要的形狀</dt>
                  <dd>{showValue(formValues.shape)}</dd>
                </div>
                <div>
                  <dt>尺寸類型</dt>
                  <dd>{showValue(sizeTypeLabels[sizeType])}</dd>
                </div>
                {sizeType === "standard" && (
                  <div>
                    <dt>公版尺寸</dt>
                    <dd>{showValue(formValues.size)}</dd>
                  </div>
                )}
                {sizeType === "custom" && (
                  <>
                    <div>
                      <dt>客製方式</dt>
                      <dd>{showValue(customTypeLabels[customType])}</dd>
                    </div>
                    {customType === "softTape" && (
                      <>
                        <div>
                          <dt>左手尺寸</dt>
                          <dd>{renderHandSize("left")}</dd>
                        </div>
                        <div>
                          <dt>右手尺寸</dt>
                          <dd>{renderHandSize("right")}</dd>
                        </div>
                      </>
                    )}
                    {customType === "mold" && (
                      <>
                        <div>
                          <dt>模土姓名</dt>
                          <dd>{showValue(formValues.mold?.name)}</dd>
                        </div>
                        <div>
                          <dt>模土電話</dt>
                          <dd>{showValue(formValues.mold?.tel)}</dd>
                        </div>
                      </>
                    )}
                  </>
                )}
                <div>
                  <dt>備註</dt>
                  <dd>{showValue(formValues.message)}</dd>
                </div>
              </dl>
            </div>
            <div className="d-flex justify-content-center gap-12">
              <Button variant="outline">加入收藏庫</Button>
              <Button variant="filled" onClick={handleCopyConfirmText}>
                {isCopied ? "已複製" : "複製文字"}
              </Button>
            </div>
          </section>
        </form>
      </section>
    </main>
  );
}

export default OrderFormPage;
