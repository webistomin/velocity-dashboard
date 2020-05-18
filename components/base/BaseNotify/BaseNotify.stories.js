import { BaseNotify } from './BaseNotify';

export default {
  title: 'BaseNotify',
  parameters: {
    options: { showPanel: false },
  },
};

export const Default = () => ({
  render() {
    return (
      <div style='display: inline-block; position: relative;  height: 200px; margin: 20px; padding-right: 15px;'>
        <BaseNotify />
        Content
      </div>
    );
  },
});
