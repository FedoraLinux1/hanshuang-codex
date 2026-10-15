import { TUTORIAL_TEXT } from "../data/targets";

export function TutorialPage() {
  return (
    <>
      <h1 className="settings-section-title">使用教程</h1>

      <div className="settings-card-block">
        <div className="settings-card-heading-row">
          <div>
            <h2 className="settings-card-heading">说明</h2>
            <p className="settings-card-description">
              就三步：填提示词 → 点安装 → 想退回去就点卸载。装之前会自动备份，随时能还原。
            </p>
          </div>
          <span className="badge badge-neutral">共 9 个目标</span>
        </div>

        <div className="panel-card" style={{ padding: "16px 18px" }}>
          <div className="app-prose">{TUTORIAL_TEXT}</div>
        </div>
      </div>
    </>
  );
}
