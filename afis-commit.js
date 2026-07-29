(async function () {
        const OWNER = "electro-volts";
        const REPO = "matrixzero.net";
        const FILE_PATH = "sursa-compendiu.md";

        const container = document.getElementById("recent-commits");
        const apiUrl =
            `https://api.github.com/repos/${OWNER}/${REPO}/commits` +
            `?path=${encodeURIComponent(FILE_PATH)}&per_page=3`;

        try {
            const res = await fetch(apiUrl);

            if (!res.ok) {
              throw new Error(`GitHub API returned ${res.status}`);
            }

            const commits = await res.json();

            if (!Array.isArray(commits) || commits.length === 0) {
              container.innerHTML = `<p class="commit-error">No commit history found for this file.</p>`;
              return;
            }

            const html = commits
            .map((c) => {
              const message = c.commit.message;
              const author = c.commit.author?.name || "Unknown";
              const date = new Date(c.commit.author?.date).toLocaleDateString(
                undefined,
                { year: "numeric", month: "short", day: "numeric" }
              );
              const sha = c.sha.slice(0, 7);
              const url = c.html_url;

              return `
                <div class="commit-item">
                  <a class="commit-message" href="${url}" target="_blank" rel="noopener">
                    ${escapeHtml(message)}
                  </a>
                  <div class="commit-meta">
                    <code>${sha}</code> · ${escapeHtml(author)} · ${date}
                  </div>
                </div>
              `;
            })
            .join("");

        container.innerHTML = `<br>${html}`;
      } catch (err) {
        container.innerHTML = `<p class="commit-error">Couldn't load commit history: ${err.message}</p>`;
        console.error("Commit widget error:", err);
      }

      function escapeHtml(str) {
        const div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
      }
})();