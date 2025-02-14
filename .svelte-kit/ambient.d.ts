
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const ALLUSERSPROFILE: string;
	export const APPDATA: string;
	export const CHROME_CRASHPAD_PIPE_NAME: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const DOTNET_CLI_TELEMETRY_OPTOUT: string;
	export const DOTNET_NOLOGO: string;
	export const DriverData: string;
	export const EFC_12728: string;
	export const ELECTRON_NO_ASAR: string;
	export const ELECTRON_RUN_AS_NODE: string;
	export const HOME: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const https_proxy: string;
	export const http_proxy: string;
	export const JAVA_HOME: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const MavenHome: string;
	export const ML_DP_SERVER_NG2: string;
	export const MOZ_LEGACY_PROFILES: string;
	export const NEXTHINK: string;
	export const NODE_ENV: string;
	export const NODE_TLS_REJECT_UNAUTHORIZED: string;
	export const no_proxy: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const OneDrive: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const OS: string;
	export const PATH: string;
	export const PATHEXT: string;
	export const pkidata: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const Redeploy: string;
	export const REDHAT_JAVA_HOME: string;
	export const ReUpdate: string;
	export const SAPKM_USER_TEMP: string;
	export const SAPLOGON_INI_FILE: string;
	export const SESSIONNAME: string;
	export const SNC_LIB: string;
	export const SNC_LIB_32: string;
	export const SNC_LIB_64: string;
	export const SSF_LIBRARY_PATH: string;
	export const SSF_LIBRARY_PATH_64: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TMP: string;
	export const TNS_ADMIN: string;
	export const UATDATA: string;
	export const USERDNSDOMAIN: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VSCODE_CODE_CACHE_PATH: string;
	export const VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
	export const VSCODE_CWD: string;
	export const VSCODE_ESM_ENTRYPOINT: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const VSCODE_IPC_HOOK: string;
	export const VSCODE_NLS_CONFIG: string;
	export const VSCODE_PID: string;
	export const windir: string;
	export const ZES_ENABLE_SYSMAN: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		ALLUSERSPROFILE: string;
		APPDATA: string;
		CHROME_CRASHPAD_PIPE_NAME: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		DOTNET_CLI_TELEMETRY_OPTOUT: string;
		DOTNET_NOLOGO: string;
		DriverData: string;
		EFC_12728: string;
		ELECTRON_NO_ASAR: string;
		ELECTRON_RUN_AS_NODE: string;
		HOME: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		https_proxy: string;
		http_proxy: string;
		JAVA_HOME: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		MavenHome: string;
		ML_DP_SERVER_NG2: string;
		MOZ_LEGACY_PROFILES: string;
		NEXTHINK: string;
		NODE_ENV: string;
		NODE_TLS_REJECT_UNAUTHORIZED: string;
		no_proxy: string;
		NUMBER_OF_PROCESSORS: string;
		OneDrive: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		OS: string;
		PATH: string;
		PATHEXT: string;
		pkidata: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PSModulePath: string;
		PUBLIC: string;
		Redeploy: string;
		REDHAT_JAVA_HOME: string;
		ReUpdate: string;
		SAPKM_USER_TEMP: string;
		SAPLOGON_INI_FILE: string;
		SESSIONNAME: string;
		SNC_LIB: string;
		SNC_LIB_32: string;
		SNC_LIB_64: string;
		SSF_LIBRARY_PATH: string;
		SSF_LIBRARY_PATH_64: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TMP: string;
		TNS_ADMIN: string;
		UATDATA: string;
		USERDNSDOMAIN: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VSCODE_CODE_CACHE_PATH: string;
		VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
		VSCODE_CWD: string;
		VSCODE_ESM_ENTRYPOINT: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		VSCODE_IPC_HOOK: string;
		VSCODE_NLS_CONFIG: string;
		VSCODE_PID: string;
		windir: string;
		ZES_ENABLE_SYSMAN: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
