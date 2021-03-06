import { createHeaders, apiUrl } from ".";

export const addTranslation = async (user, translation) => {
	try {
		const response = await fetch(`${apiUrl}/${user.id}`, {
			method: "PATCH",
			headers: createHeaders(),
			body: JSON.stringify({
				translations: [...user.translations, {translation: translation, deleted: false}],
			}),
		});
		if (!response.ok) {
			throw new Error("Could not update translations history");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		return [error.message, []];
	}
};
export const deleteTranslations = async (user) => {		
	try {
		const response = await fetch(`${apiUrl}/${user.id}`, {
			method: "PATCH",
			headers: createHeaders(),
			body: JSON.stringify({
				translations: user.translations,
			}),
		});
		if (!response.ok) {
			throw new Error("Could not delete translations");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		return [error.message, []];
	}
}
