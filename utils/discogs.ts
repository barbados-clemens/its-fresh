function rand(max: number) {
  return Math.floor(Math.random() * max);
}

export async function getImages(): Promise<[string, string, string, string]> {
  try {
    const init = {
      headers: {
        "user-agent": `CalebUkleCom Deno/${Deno.version?.deno || "unknown"}`,
        "Authorization": `Discogs token=${Deno.env.get("DISCOGS_TOKEN")}`,
      },
    };
    const collection = await fetch(
      "https://api.discogs.com/users/Barbados_Clemens/collection/folders/0/releases?per_page=200",
      init,
    ).then((r) => r.json());

    const n = collection.releases.length;

    console.group("loaded items");
    const selected = [
      collection.releases[rand(n)],
      collection.releases[rand(n)],
      collection.releases[rand(n)],
      collection.releases[rand(n)],
    ].map((s) => {
      console.log("title: ", s.basic_information.title);
      console.log("resource_url: ", s.basic_information.resource_url);
      return s.basic_information.cover_image;
    }) as [
      string,
      string,
      string,
      string,
    ];
    console.groupEnd();

    return selected;
  } catch (e) {
    console.log(e);
    return ["", "", "", ""];
  }
}
