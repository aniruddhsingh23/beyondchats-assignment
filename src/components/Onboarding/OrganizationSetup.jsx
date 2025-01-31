export default function OrganizationSetup({ data, onUpdate, onAutoFetch }) {
    return (
      <div className="space-y-6">
        <input
          type="text"
          placeholder="Company Name"
          value={data.companyName}
          onChange={(e) => onUpdate('companyName', e.target.value)}
          className="input-field"
        />
        <div className="flex gap-4">
          <input
            type="url"
            placeholder="Website URL"
            value={data.websiteUrl}
            onChange={(e) => onUpdate('websiteUrl', e.target.value)}
            className="input-field flex-1"
          />
          <button
            onClick={onAutoFetch}
            className="secondary-btn"
          >
            Auto-fetch
          </button>
        </div>
        <textarea
          placeholder="Company Description"
          rows="4"
          value={data.description}
          onChange={(e) => onUpdate('description', e.target.value)}
          className="input-field"
        />
      </div>
    )
  }