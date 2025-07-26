import { Form } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Schedule an Announcement Bar</h1>

      <Form method="post">
        <div style={{ marginBottom: 10 }}>
          <label>
            Message:
            <input type="text" name="message" required style={{ width: '100%' }} />
          </label>
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>
            Start Time:
            <input type="datetime-local" name="start" required />
          </label>
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>
            End Time:
            <input type="datetime-local" name="end" required />
          </label>
        </div>

        <button type="submit">Save</button>
      </Form>
    </div>
  );
}
