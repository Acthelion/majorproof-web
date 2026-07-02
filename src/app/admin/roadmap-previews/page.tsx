import Link from "next/link";
import { isAdminAuthenticated, loginAdmin, logoutAdmin } from "../requests/actions";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

type RoadmapPreview = {
  id: string;
  name_or_alias: string | null;
  contact_method: string | null;
  current_major: string;
  current_year: string | null;
  target_goal: string;
  interested_asset: string | null;
  existing_experience: string | null;
  primary_need: string;
  ai_result: string;
  created_at: string;
};

export default async function AdminRoadmapPreviewsPage() {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    return <AdminLogin />;
  }

  const { data, error } = await supabaseAdmin
    .from("majorproof_ai_roadmap_previews")
    .select(
      "id, name_or_alias, contact_method, current_major, current_year, target_goal, interested_asset, existing_experience, primary_need, ai_result, created_at"
    )
    .order("created_at", { ascending: false })
    .limit(50);

  const previews = (data || []) as RoadmapPreview[];

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-10 text-neutral-50">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col gap-5 border-b border-neutral-800 pb-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
              MajorProof Admin
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              AI Roadmap Previews
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-300">
              Review controlled AI roadmap preview submissions and identify users who may be worth converting into formal access requests.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/requests"
              className="rounded-2xl border border-neutral-700 px-4 py-3 text-sm font-semibold text-neutral-100 transition hover:border-amber-300 hover:text-amber-200"
            >
              Request CRM
            </Link>

            <Link
              href="/ai-roadmap-preview"
              className="rounded-2xl border border-neutral-700 px-4 py-3 text-sm font-semibold text-neutral-100 transition hover:border-amber-300 hover:text-amber-200"
            >
              Preview form
            </Link>

            <form action={logoutAdmin}>
              <button
                type="submit"
                className="rounded-2xl border border-neutral-700 px-4 py-3 text-sm font-semibold text-neutral-100 transition hover:border-red-300 hover:text-red-200"
              >
                Log out
              </button>
            </form>
          </div>
        </header>

        {error ? (
          <div className="mb-8 rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-100">
            Failed to load roadmap previews: {error.message}
          </div>
        ) : null}

        <section className="mb-8 grid gap-4 md:grid-cols-4">
          <StatCard title="Total shown" value={String(previews.length)} />
          <StatCard
            title="TechProof"
            value={String(
              previews.filter((preview) => preview.interested_asset === "TechProof")
                .length
            )}
          />
          <StatCard
            title="With contact"
            value={String(
              previews.filter((preview) => Boolean(preview.contact_method)).length
            )}
          />
          <StatCard
            title="No asset selected"
            value={String(
              previews.filter((preview) => !preview.interested_asset).length
            )}
          />
        </section>

        <section className="space-y-6">
          {previews.length === 0 ? (
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-8 text-sm text-neutral-300">
              No AI roadmap previews yet.
            </div>
          ) : (
            previews.map((preview) => (
              <PreviewCard key={preview.id} preview={preview} />
            ))
          )}
        </section>
      </div>
    </main>
  );
}

function AdminLogin() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-6 text-neutral-50">
      <form
        action={loginAdmin}
        className="w-full max-w-md rounded-3xl border border-neutral-800 bg-neutral-900 p-8 shadow-2xl shadow-black/30"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">
          MajorProof Admin
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Admin login
        </h1>

        <p className="mt-4 text-sm leading-7 text-neutral-300">
          Enter the admin password to view AI roadmap previews.
        </p>

        <label className="mt-6 block">
          <span className="mb-2 block text-sm font-medium text-neutral-200">
            Password
          </span>
          <input
            name="password"
            type="password"
            required
            className="w-full rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 outline-none transition focus:border-amber-300"
          />
        </label>

        <button
          type="submit"
          className="mt-6 w-full rounded-2xl bg-amber-300 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-200"
        >
          Log in
        </button>
      </form>
    </main>
  );
}

function PreviewCard({ preview }: { preview: RoadmapPreview }) {
  return (
    <article className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-xl shadow-black/20">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            {preview.name_or_alias || "Unnamed user"}
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            {formatDate(preview.created_at)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <Tag text={preview.interested_asset || "No asset selected"} />
          <Tag text={preview.current_major} />
          <Tag text={preview.current_year || "Year not provided"} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <InfoBlock title="Contact" body={preview.contact_method || "Not provided"} />
        <InfoBlock title="Target goal" body={preview.target_goal} />
        <InfoBlock title="Main problem" body={preview.primary_need} />
        <InfoBlock
          title="Existing experience"
          body={preview.existing_experience || "Not provided"}
        />
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold text-neutral-200">
          AI roadmap result
        </h3>
        <div className="max-h-[520px] overflow-auto whitespace-pre-wrap rounded-2xl border border-neutral-800 bg-neutral-950 p-5 text-sm leading-8 text-neutral-300">
          {preview.ai_result}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={`/ai-roadmap-preview/result/${preview.id}`}
          className="rounded-2xl border border-neutral-700 px-4 py-3 text-sm font-semibold text-neutral-100 transition hover:border-amber-300 hover:text-amber-200"
        >
          Open public result
        </Link>
      </div>
    </article>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-5">
      <h2 className="text-sm font-medium text-neutral-400">{title}</h2>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
    </div>
  );
}

function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
      <h3 className="text-sm font-medium text-neutral-400">{title}</h3>
      <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-neutral-200">
        {body}
      </p>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-neutral-700 bg-neutral-950 px-3 py-1 text-neutral-300">
      {text}
    </span>
  );
}

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}